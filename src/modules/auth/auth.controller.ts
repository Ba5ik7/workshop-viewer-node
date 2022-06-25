import { Body, Controller, Post, Request, UseFilters, UseGuards } from '@nestjs/common';
import { MongooseFilter } from 'src/filters/mongoose.filter';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
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

  @UseGuards(LocalAuthGuard)
  @Post('local/login')
  localLogin(@Request() req): IUser  {
    return req.user;
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
