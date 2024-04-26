import { routes } from './../../app.routes';
import { Component, HostListener, inject } from '@angular/core';
import { BG_IMG_URL, LOGO_URL } from '../../constants/config';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HeaderComponent } from '../../components/header/header.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, ReactiveFormsModule,MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  bgURL = BG_IMG_URL;
  checked = true;
  email!: string;
  password: string ='';
  showPassword: boolean = false;
  loginService = inject(LoginService);
  router = inject(Router);
  toasterService = inject(ToastrService);
  emailFormatError: boolean = false;
  checkEmailFormat() {
    if (this.email && !this.email.trim().toLowerCase().endsWith('@gmail.com')) {
        this.emailFormatError = true;
    } else {
        this.emailFormatError = false;
    }
}
  ngOnInit(): void {
    if (this.loginService.isLoggedIn) {
      this.router.navigateByUrl("/browse");
    }
    else {
      this.router.navigateByUrl("/login");
    }
  }
  togglePw() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (!this.email || !this.password) {
      this.toasterService.error("provide email or password");
      return;
    }
    this.loginService.login(this.email, this.password);
    this.toasterService.success("login success");
    this.router.navigateByUrl('/browse');

  }

  //check bật tắt capslock
  capslockOn: boolean = false;
  @HostListener('window:click', ['$event']) onClick(event: any) {
    if (event.getModifierState && event.getModifierState('CapsLock')) {
      this.capslockOn = true;
    } else {
      this.capslockOn = false;
    }
  }
  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: any) {
    if (event.getModifierState && event.getModifierState('CapsLock')) {
      this.capslockOn = true;
    } else {
      this.capslockOn = false;
    }
  }
  @HostListener('window:keyup', ['$event'])
  onKeyUp(event: any) {
    if (event.getModifierState && event.getModifierState('CapsLock')) {
      this.capslockOn = true;
    } else {
      this.capslockOn = false;
    }
  }
}
