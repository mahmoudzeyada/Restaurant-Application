export default class User {
  constructor(
    public email: string,
    public userId: string,
    private _token: string,
    private _expirationDate: Date
  ) {}

  get token(): string | null {
    if (!this._expirationDate || new Date() > this._expirationDate) {
      return null;
    }
    return this._token;
  }
}
