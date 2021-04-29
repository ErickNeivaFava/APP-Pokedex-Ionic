import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public checkUserData(username: string, password: string) {
    if (username === '' || password === '') {
      console.log(`Invalid username or password `);
    } else {
      console.log(`Username: ${username}   Password: ${password}`);
    }
  }

  public showCheckBoxState(checkboxState: boolean) {
    console.log(checkboxState);
  }

  constructor() { }
}
