import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly TOKEN_KEY = 'jwt_token';

  constructor() {}

  /** Save token after login */
  setToken(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  /** Get token */
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  /** Remove token on logout */
  clearToken() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) return false;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const exp = payload.exp;
      if (exp && Date.now() >= exp * 1000) {
        this.clearToken();
        return false;
      }
    } catch (e) {
      this.clearToken();
      return false;
    }

    return true;
  }
}
