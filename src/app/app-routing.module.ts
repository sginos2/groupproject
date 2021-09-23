import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SetupComponent } from './components/setup/setup.component';
import { GameplayComponent } from './components/gameplay/gameplay.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'setup', component: SetupComponent},
  {path: 'match', component: GameplayComponent},
  {path: 'user', component: UserInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
