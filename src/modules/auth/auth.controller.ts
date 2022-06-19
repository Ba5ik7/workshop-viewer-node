import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { IUser } from './interfaces/user.interface';

@Controller('auth')
export class AuthController {

  constructor(
    private authService: AuthService
  ) {}

  @Post('local/create-account')
  createAccount(@Body() user): Promise<IUser> {
    console.log(user);
    
    return this.authService.createAccount(user);
  }

  @Post('local/login')
  localLogin() {
    this.authService.localLogin();
  }

  @Post('logout')
  logout() {
    this.authService.logout();
  }

  @Post('refresh')
  refresh() {
    this.authService.refresh();
  }
}
