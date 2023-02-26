import { IsEmail, Matches } from 'class-validator';

export class SignUpDto {
  @IsEmail()
  email: string;

  @Matches(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)
  password: string;
}
