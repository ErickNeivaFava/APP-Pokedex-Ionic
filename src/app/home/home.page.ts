import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public userName: string = '';
  public userPassword: string = '';
  public rememberMe: boolean;

  constructor(private loginService: LoginService) {}

  public showData(): void {
    this.loginService.checkUserData(this.userName, this.userPassword);
    this.userName = '';
    this.userPassword = '';
  }

  public updateRememberMe(): void {
    this.loginService.showCheckBoxState(this.rememberMe);
  }
}
