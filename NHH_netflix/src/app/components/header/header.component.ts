import { Component, inject } from '@angular/core';
import { LOGO_URL } from '../../constants/config';
import { MatIconModule } from '@angular/material/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { LoginService } from '../../service/login.service';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, NzInputModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  email!: string;
  password!: string;
  hiddenHeader: boolean = false;
  hiddenMenuMobile:boolean = true;
  hiddenSearch: boolean = true;
  logoURL = LOGO_URL;
  menuHeader = ['Home', "TvShows", "Movies", "New & Popular", "Browse by Language"];
  loginService = inject(LoginService);
  toasterService = inject(ToastrService)
  router = inject(Router)

  ngOnInit() {
    if (this.loginService.isLoggedIn) {
      this.hiddenHeader = !this.hiddenHeader
    }
  }

  Search() {
    this.hiddenSearch = false;
  }
  hiddenSeach() {
    this.hiddenSearch = true;
  }

  logOut() {
    localStorage.clear();
    this.toasterService.success("logout success");
    this.router.navigateByUrl('/**');
  }

  checkClassMenu =document.getElementsByClassName('header-menu');
  selectHeaderMenu(){
    if(this.checkClassMenu){
      this.hiddenMenuMobile = !this.hiddenMenuMobile
    }
  }
  checkSearch : boolean = false;
  onKeydown(event: KeyboardEvent) {
    if (event.key === "Enter") {
      this.router.navigateByUrl("/search");
    }
}



}
