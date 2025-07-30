import { Resolver, Mutation, Args, Context, Query } from '@nestjs/graphql';
import { Response } from 'express';

import { AuthService } from './auth.service';
import { AuthUserInput } from './dto/auth-user.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './guards/gql-auth.guard';

const COOKIE_EXPIRES_IN =
  1000 * 60 * 60 * (Number(process.env.COOKIE_EXPIRES_IN_HOURS) || 1); //1000 * 60 * 60 is 1 hour

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  private setAccessTokenCookie(res: Response, token: string) {
    res.cookie('accessToken', token, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: COOKIE_EXPIRES_IN,
    });
  }

  @Mutation(() => String)
  async register(
    @Args('input') input: AuthUserInput,
    @Context('res') res: Response,
  ): Promise<string> {
    const { accessToken } = await this.authService.register(input);
    this.setAccessTokenCookie(res, accessToken);
    return 'User registered';
  }

  @Mutation(() => String)
  async login(
    @Args('input') input: AuthUserInput,
    @Context('res') res: Response,
  ): Promise<string> {
    const { accessToken } = await this.authService.login(input);
    this.setAccessTokenCookie(res, accessToken);
    return 'User login successful';
  }

  @Query(() => String)
  @UseGuards(GqlAuthGuard)
  getSecretData(@Context('req') req): string {
    const user = req.user;
    return `Hello, ${user.email}`;
  }
}
