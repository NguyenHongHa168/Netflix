import { Component, inject } from '@angular/core';
import { LOGO_URL } from '../../constants/config';
import { MatIconModule } from '@angular/material/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { LoginService } from '../../service/login.service';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-movie-search',
  standalone: true,
  imports: [HeaderComponent,CommonModule,MatIconModule,FooterComponent],
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.scss'
})
export class MovieSearchComponent {
  ngOnInit() {
  }
  constructor() {
  }


}
