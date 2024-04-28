import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { authGuard } from './guards/auth.guard';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "browse",
        component: BrowseComponent,
        canActivate:[authGuard]
    },
    {
        path: "search",
        component: MovieSearchComponent
    },
    {
        path: "**",
        component: LoginComponent
    }
];
