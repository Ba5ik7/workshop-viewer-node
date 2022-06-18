import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

  constructor(
    private authService: AuthService
  ) {}

  @Post('local/signup')
  localSignup() {

  }

  @Post('local/login')
  localLogin() {
    
  }

  @Post('logout')
  localLogout() {
    
  }

  @Post('refresh')
  refresh() {
    
  }
}
