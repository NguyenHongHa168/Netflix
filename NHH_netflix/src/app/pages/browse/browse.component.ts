import { Component, Input, inject } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';
import { MovieCategoryComponent } from '../../components/movie-category/movie-category.component';
import { MovieService } from '../../service/movie.service';
import { Movie } from '../../types/movies';
import { tmcbConfig } from '../../constants/config';
import { DomSanitizer } from '@angular/platform-browser';
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
  tmcbConfig= tmcbConfig
  public domSanitise = inject(DomSanitizer);

  ngOnInit(): void {
    // if(!this.loginService.isLoggedIn){
    //   this.router.navigateByUrl("/login");
    // }
    this.movieService.getPopularMovies().subscribe((result:any) => {
      // console.log(result);
      this.popularMovies = result.results;
      this.bannerMovie = this.popularMovies[0];
      // this.movieService.getMovieVideos(this.bannerMovie.id).subscribe((res:any)=>{
      //   this.bannerMovie.videoKey = res.result.find((x:any)=> x.site='Youtube').key;
      //   console.log("banner",this.bannerMovie);
      // })
      this.movieService
        .getMovieVideos(this.bannerMovie.id)
        .subscribe((res: any) => {
          this.bannerMovie.videoKey = res.results.find(
            (x: any) => (x.site = 'YouTube')
          ).key;
          console.log("test",this.bannerMovie)
        });
    });

    this.movieService.getTopRatedMovies().subscribe((result:any) => {
      this.topRateMovies = result.results
    });

    this.movieService.getNowPlayMovies().subscribe((result:any) => {
      this.nowPlayMovies = result.results
    });

    this.movieService.getUpComingMovies().subscribe((result:any) => {
      this.upComingMovies = result.results
    })
  }


}
