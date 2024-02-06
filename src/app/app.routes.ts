import { Routes } from '@angular/router';
import { authenticationGuard } from './authentication.guard';
import { CommentComponent } from './Component/comment/comment.component';
import { FooterComponent } from './Component/footer/footer.component';
import { HeaderComponent } from './Component/header/header.component';

import { PostDetailComponent } from './Component/post-list/post-detail/post-detail.component';
import { PostListComponent } from './Component/post-list/post-list.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:'', component: LoginComponent},
    {path:'posts', component: PostListComponent ,canActivate:[authenticationGuard]},

    {path:'detail/:id', component: PostDetailComponent},
    {path:'comment', component: CommentComponent}

];
