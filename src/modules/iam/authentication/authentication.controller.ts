import {
  Body,
  Controller,
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
// import { ActiveUser } from '../../../decorators/active-user.decorator';
// import { ActiveUserData } from '../../../interfaces/active-user-data.interface';
// import { RefreshTokenDto } from './dto/refresh-token.dto';

const cookieOptions = {
  secure: false,
  httpOnly: true,
  sameSite: true,
};

@Auth(AuthType.None)
@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}

  @Post('sign-up')
  async signUp(
    @Res({ passthrough: true }) response: Response,
    @Body() signUpDto: SignUpDto,
  ) {
    await this.authService.signUp(signUpDto);
    const jwt = await this.authService.signIn(signUpDto);
    response.cookie('accessToken', jwt.accessToken, cookieOptions);
  }

  @HttpCode(HttpStatus.OK)
  @Post('sign-in')
  async signIn(
    @Res({ passthrough: true }) response: Response,
    @Body() signInDto: SignInDto,
  ) {
    const jwt = await this.authService.signIn(signInDto);
    response.cookie('accessToken', jwt.accessToken, cookieOptions);
    // Let's think about the need of refresh-tokens
    // response.cookie('refreshToken', jwt.refreshToken, cookieOptions);
  }

  // Let's think about the need of refresh-tokens
  // @HttpCode(HttpStatus.OK)
  // @Post('refresh-tokens')
  // async refreshTokens(
  //   @Res({ passthrough: true }) response: Response,
  //   @Body() refreshTokenDto: RefreshTokenDto,
  // ): Promise<void> {
  //   const jwt = await this.authService.refreshTokens(refreshTokenDto);
  //   response.cookie('accessToken', jwt.accessToken, cookieOptions);
  //   response.cookie('refreshToken', jwt.refreshToken, cookieOptions);
  // }
}
