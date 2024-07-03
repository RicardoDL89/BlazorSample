export interface ITokenPayload {
  id: string;
  username: string;
  sessionId: string;
}

export interface ITokenService {
  createToken: ({ id, username, sessionId }: ITokenPayload) => Promise<string>;
}
