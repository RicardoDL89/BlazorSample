import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Profile } from "@node-saml/passport-saml";
import { SamlStrategyBase } from "./base/saml.strategy.base";
import { Prisma } from "@prisma/client";
import { UserService } from "../../user/user.service";
import { UserCreateInput } from "../../user/base/UserCreateInput";

@Injectable()
export class SamlStrategy extends SamlStrategyBase {
  /**
   * Map the IdP profile to the auth entity.
   * All the required fields must be mapped here or made
   * them not required otherwise a type error will appear.
   * @param profile SAML profile
   * @returns
   */
  mapProfileToAuthEntity(profile: Profile): Prisma.UserCreateArgs["data"] {
    return {
      username: profile.nameID,
      roles: this.mapProfileToRoles(profile),
      sessionId: profile.sessionIndex ?? "",
    };
  }

  /**
   * Map the IdP profile roles attributes to the amplication roles for auth entity
   * @param profile
   * @returns
   */
  mapProfileToRoles(profile: Profile): string[] {
    const profileAttributes = profile.attributes as Record<string, string[]>;
    if (profileAttributes["roles"]) {
      return typeof profileAttributes["roles"] === "string"
        ? [profileAttributes["roles"]]
        : profileAttributes["roles"];
    } else {
      return [];
    }
  }

  constructor(
    protected readonly configService: ConfigService,
    protected readonly userService: UserService
  ) {
    super(configService, userService);
  }
}
