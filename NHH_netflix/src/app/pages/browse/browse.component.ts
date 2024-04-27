import { Component, inject } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';
import { MovieCategoryComponent } from '../../components/movie-category/movie-category.component';
import { MovieService } from '../../service/movie.service';
import { Movie } from '../../types/movies';
import { tmcbConfig } from '../../constants/config';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [
    HeaderComponent,
    CommonModule,
    MovieCategoryComponent,
    MatIconModule,
    FooterComponent,
  ],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})
export class BrowseComponent {
  isMuted: any = 0;
  bannerMovie!: Movie;
  popularMovies: Movie[] = [];
  topRateMovies: Movie[] = [];
  nowPlayMovies: Movie[] = [];
  upComingMovies: Movie[] = [];
  ratedMovie: Movie[] = [];
  tmcbConfig = tmcbConfig;
  router = inject(Router)
  loginService = inject(LoginService);
  movieService = inject(MovieService);
  public domSanitise = inject(DomSanitizer);
  urlFilm: string = `?autoplay=1&mute=${this.isMuted ? '0' : '1'}&showinfo=0&controls=0`;

  constructor(
    private dialog: MatDialog,
    private domSanitizer: DomSanitizer) {
  }
  iframeUrl: SafeResourceUrl | undefined;
  toggleMute() {
    this.isMuted = !this.isMuted;

    // Cập nhật URL của iframe để bật/tắt tiếng
    const videoKey = this.bannerMovie.videoKey;
    const url = `https://www.youtube.com/embed/${videoKey}${this.urlFilm.replace(/mute=\d/, `mute=${this.isMuted ? '1' : '0'}`)}`;
    this.iframeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
  ngOnInit(): void {
    // if(!this.loginService.isLoggedIn){
    //   this.router.navigateByUrl("/login");
    // }
    const videoKey = this.bannerMovie;
    const url = `https://www.youtube.com/embed/${videoKey}${this.urlFilm}`;
    this.iframeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(url);

    this.movieService.getPopularMovies().subscribe((result: any) => {
      this.popularMovies = result.results;
      this.bannerMovie = this.popularMovies[0];
      this.movieService
        .getMovieVideos(this.bannerMovie.id)
        .subscribe((res: any) => {
          this.bannerMovie.videoKey = res.results.find(
            (x: any) => (x.site = 'YouTube')
          ).key;
        });
    });

    this.movieService.getTopRatedMovies().subscribe((result: any) => {
      this.topRateMovies = result.results
    });

    this.movieService.getNowPlayMovies().subscribe((result: any) => {
      this.nowPlayMovies = result.results
    });

    this.movieService.getUpComingMovies().subscribe((result: any) => {
      this.upComingMovies = result.results
    })
  }

  openSignUpForm() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '60vw',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

}
