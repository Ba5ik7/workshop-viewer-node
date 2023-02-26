import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { AuthenticationService } from './authentication.service';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';
import { Auth } from '../../../decorators/auth.decorator';
import { AuthType } from '../../../enums/auth-type.enum';
import { ActiveUser } from '../../../decorators/active-user.decorator';
import { ActiveUserData } from '../../../interfaces/active-user-data.interface';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}

  @Auth(AuthType.None)
  @Post('sign-up')
  async signUp(@Body() signUpDto: SignUpDto): Promise<void> {
    return this.authService.signUp(signUpDto);
  }

  @Auth(AuthType.None)
  @HttpCode(HttpStatus.OK)
  @Post('sign-in')
  async signIn(
    @Res({ passthrough: true }) response: Response,
    @Body() signInDto: SignInDto,
  ): Promise<void> {
    const jwt = await this.authService.signIn(signInDto);
    response.cookie('accessToken', jwt.accessToken, {
      secure: false,
      httpOnly: true,
      sameSite: true,
    });
  }

  @Get('hello')
  hello(@ActiveUser() user: ActiveUserData): string {
    console.log({ user });
    return 'Hello World!';
  }
}
