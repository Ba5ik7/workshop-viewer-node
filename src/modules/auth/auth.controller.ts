import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

  constructor(
    private authService: AuthService
  ) {}

  @Post('local/signup')
  localSignup() {
    this.authService.localSignup();
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
