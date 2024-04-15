import { Component, inject } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';
import { MovieCategoryComponent } from '../../components/movie-category/movie-category.component';
import { MovieService } from '../../service/movie.service';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [HeaderComponent,CommonModule,MovieCategoryComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})
export class BrowseComponent {
  loginService = inject(LoginService);
  router = inject(Router)

movieService = inject(MovieService);
  popularMovie :any[] =[]
  ngOnInit(): void {
    // if(!this.loginService.isLoggedIn){
    //   this.router.navigateByUrl("/login");
    // }
    this.movieService.getPopularMovie().subscribe((result:any) => {
      console.log(result);
      this.popularMovie = result.results

    })
  }


}
