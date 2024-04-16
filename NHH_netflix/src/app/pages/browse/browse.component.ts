import { Component, Input, inject } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';
import { MovieCategoryComponent } from '../../components/movie-category/movie-category.component';
import { MovieService } from '../../service/movie.service';
import { Movie } from '../../types/movies';

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
  popularMovies :Movie[] =[];
  topRateMovies :Movie[] =[];
  nowPlayMovies :Movie[] =[];
  upComingMovies :Movie[] =[];
  bannerMovie!:Movie;
  ngOnInit(): void {
    // if(!this.loginService.isLoggedIn){
    //   this.router.navigateByUrl("/login");
    // }
    this.movieService.getPopularMovie().subscribe((result:any) => {
      console.log(result);
      this.popularMovies = result.results
      this.bannerMovie = this.popularMovies[0]
    });

    this.movieService.getTopRatedMovies().subscribe((result:any) => {
      console.log(result);
      this.topRateMovies = result.results
    });

    this.movieService.getNowPlayMovies().subscribe((result:any) => {
      console.log(result);
      this.nowPlayMovies = result.results
    });

    this.movieService.getUpComingMovies().subscribe((result:any) => {
      console.log(result);
      this.upComingMovies = result.results
    })
  }


}
