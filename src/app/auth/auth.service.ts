import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthResponse } from "./auth.model";
import { Observable, throwError, Subject, BehaviorSubject } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import User from "./user.model";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private autoLogOutTimer: any;
  user$ = new BehaviorSubject<User>(null);
  constructor(private http$: HttpClient, private router: Router) {}

  private apiKey = "AIzaSyCI60DjC0Cdv6WpCwTMrE4r_MMkPZT-0K4";
  signUp(formData: {
    email: string;
    password: string;
  }): Observable<AuthResponse> {
    return this.http$
      .post<AuthResponse>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}`,
        {
          ...formData,
          returnSecureToken: true
        }
      )
      .pipe(
        catchError(err => this.handelSignOutError(err)),
        tap(resData => this.creatingUser(resData))
      );
  }

  signIn(formData: { email: string; password }): Observable<AuthResponse> {
    return this.http$
      .post<AuthResponse>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}`,
        {
          ...formData,
          returnSecureToken: true
        }
      )
      .pipe(
        catchError(err => this.handelSignInError(err)),
        tap(resData => this.creatingUser(resData))
      );
  }

  autoLogIn() {
    const userData: {
      email: string;
      userId: string;
      _token: string;
      _expirationDate: string;
    } = JSON.parse(localStorage.getItem("userData"));

    if (!userData) {
      return;
    }

    const loadedUser = new User(
      userData.email,
      userData.userId,
      userData._token,
      new Date(userData._expirationDate)
    );

    if (loadedUser.token) {
      this.user$.next(loadedUser);
    }

    const duration =
      new Date(userData._expirationDate).getTime() - new Date().getTime();
    this.autoLogOut(duration);
  }

  logOut() {
    this.user$.next(null);
    this.router.navigate(["/auth"]);
    localStorage.removeItem("userData");
    if (this.autoLogOutTimer) {
      clearTimeout(this.autoLogOutTimer);
    }
    this.autoLogOutTimer = null;
  }

  autoLogOut(duration) {
    this.autoLogOutTimer = setTimeout(() => this.logOut(), duration);
  }

  creatingUser(resData: AuthResponse) {
    const { localId: userId, expiresIn, idToken: token, email } = resData;
    const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user$.next(user);
    this.autoLogOut(+expiresIn * 1000);
    localStorage.setItem("userData", JSON.stringify(user));
  }

  handelSignInError(err) {
    let errorMessage = "UnKnown Error Occurred";
    if (!err.error || !err.error.error || !err.error.error.message) {
      return throwError(errorMessage);
    }
    switch (err.error.error.message) {
      case "EMAIL_NOT_FOUND":
        errorMessage =
          "There is no user record corresponding to this identifier. The user may have been deleted";
        break;
      case "INVALID_PASSWORD":
        errorMessage =
          "The password is invalid or the user does not have a password";
        break;
      case "USER_DISABLED":
        errorMessage =
          "The user account has been disabled by an administrator.";
        break;
    }

    return throwError(errorMessage);
  }

  handelSignOutError(err) {
    let errorMessage = "UnKnown Error Occurred";
    if (!err.error || !err.error.error || !err.error.error.message) {
      return throwError(errorMessage);
    }
    switch (err.error.error.message) {
      case "EMAIL_EXISTS":
        errorMessage = "this is email is already exists";
    }

    return throwError(errorMessage);
  }
}
