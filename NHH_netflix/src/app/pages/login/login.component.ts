import { routes } from './../../app.routes';
import { Component, inject } from '@angular/core';
import { BG_IMG_URL, LOGO_URL } from '../../constants/config';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
logoURL= LOGO_URL;
bgURL = BG_IMG_URL;

email!: string;
password!:string
loginService = inject(LoginService)
router = inject(Router)
toasterService = inject(ToastrService)

ngOnInit(): void {
  if(this.loginService.isLoggedIn){
    this.router.navigateByUrl("/browse");
  }
}

onSubmit(){
  if(!this.email || !this.password){
    this.toasterService.error("provide email or password");
    return; 
  }
  this.loginService.login(this.email, this.password);
  this.toasterService.success("login success");
  this.router.navigateByUrl('/browse');
  
}


}