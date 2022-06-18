import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {

  @Post('local/signup')
  localSignup() {

  }

  @Post('local/login')
  localLogin() {
    
  }

  @Post('local/logout')
  localLogout() {
    
  }

  @Post('local/refresh')
  refresh() {
    
  }
}
