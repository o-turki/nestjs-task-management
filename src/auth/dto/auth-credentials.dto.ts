import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(5)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/^((?=.*[0-9])|(?=.*\W))(?=.*[a-z])(?=.*[A-Z])(?!.* ).*$/, {
    message:
      'Please ensure your password includes at least one digit (1-9), one lowercase letter, one uppercase letter, and no spaces.',
  })
  password: string;
}
