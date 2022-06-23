import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { MongooseFilter } from 'src/filters/mongoose.filter';
import { AuthService } from './auth.service';
import { IUser } from './interfaces/user.interface';

@Controller('auth')
export class AuthController {

  constructor(
    private authService: AuthService
  ) {}

  @Post('local/create-account')
  @UseFilters(MongooseFilter)
  createAccount(@Body() user): Promise<IUser> {
    return this.authService.createAccount(user);
  }

  @Post('local/delete-account')
  @UseFilters(MongooseFilter)
  removeAccount(@Body() user): Promise<IUser> {
    return this.authService.removeAccount(user);
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
