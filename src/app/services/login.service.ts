import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public nameOfUser: string;

  public checkUserData(userName: string, userPassword: string): void {
    if (userName === '' || userPassword === '') {
      console.log(`Invalid username or password `);
    } else {
      this.nameOfUser =
        userName.indexOf('s') > -1 ? `${userName}'` : `${userName}'s`;
    }
  }

  public showCheckBoxState(checkboxState: boolean): void {
    console.log(checkboxState);
  }

  constructor() {}
}
