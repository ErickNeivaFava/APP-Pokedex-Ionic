import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  public checkUserData(userName: string, userPassword: string): void {
    if (userName === undefined || userPassword === undefined) {
      console.log(`Invalid username or password `);
    } else {
      console.log(`Username: ${userName}   Password: ${userPassword}`);
    }
  }

  public showCheckBoxState(checkboxState: boolean): void {
    //console.log(checkboxState);
  }

  constructor() {}
}
