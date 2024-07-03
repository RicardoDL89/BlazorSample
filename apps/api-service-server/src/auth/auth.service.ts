import { Injectable, UnauthorizedException } from "@nestjs/common";
import { TokenService } from "./token.service";
import { UserInfo } from "./UserInfo";
import { UserService } from "../user/user.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly tokenService: TokenService,
    private readonly userService: UserService
  ) {}

  async login(user: UserInfo): Promise<UserInfo> {
    if (!user) {
      throw new UnauthorizedException("The passed credentials are incorrect");
    }
    const accessToken = await this.tokenService.createToken({
      id: user.id,
      username: user.username,
      sessionId: user.sessionId,
    });
    return {
      accessToken,
      ...user,
      roles: user.roles as string[],
    };
  }
}
