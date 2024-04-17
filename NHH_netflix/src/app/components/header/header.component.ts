import { Component } from '@angular/core';
import { LOGO_URL } from '../../constants/config';
import { MatIconModule } from '@angular/material/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule,NzInputModule,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  logoURL= LOGO_URL;
  hiddenSearch:boolean= true;
  menuHeader =['Home',"TvShows","Movies","New & Popular", "Browse by Language"];

  ngOnInit() {
  }

  Search(){
    this.hiddenSearch = false ;
  }
  hiddenSeach(){
    this.hiddenSearch = true;
  }

}
