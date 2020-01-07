import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../Models/User';
import {UserService} from '../../Services/user-service';
import {LoginDataDTO} from '../../Models/LoginDataDTO';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  submitted = false;
  invalidLogin = false;
  loading = false;
  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) {
  }
  get f1() {
    return this.loginForm.controls;
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login_a: ['', [Validators.required]],
      pass_a: ['', [Validators.required]],
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.userService.login(new LoginDataDTO(this.loginForm.value.login_a, this.loginForm.value.pass_a)).then(isValid => {
      if (isValid) {
        if(this.loginForm.value.login_a == AppComponent.admin.email && this.loginForm.value.pass_a == AppComponent.admin.password){
          sessionStorage.setItem(
            AppComponent.token,
            btoa(AppComponent.admin.key)
          );
        }else {
          sessionStorage.setItem(
            AppComponent.token,
            btoa(this.loginForm.value.login_a)
          );
        }
        this.invalidLogin = false;
        this.submitted = false;
        this.loginForm.reset();
        this.router.navigate(['']).then();
        this.loading = false;
      } else {
        this.invalidLogin = true;
        this.loading = false;
      }
    });
  }
  ngOnDestroy(): void {
    this.submitted = false;
    this.loginForm.reset();
    this.invalidLogin = false;
  }
}
