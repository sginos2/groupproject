import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { SideNavbarComponent } from './components/gameplay/side-navbar/side-navbar.component';
import { CardMatchComponent } from './components/gameplay/card-match/card-match.component';
import { TimerComponent } from './components/gameplay/timer/timer.component';
import { LoginComponent } from './components/login/login.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SetupComponent } from './components/setup/setup.component';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { CountdownModule } from 'ngx-countdown';
import { MatSnackBarModule } from '@angular/material/snack-bar';


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GameplayComponent } from './components/gameplay/gameplay.component';


const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);



@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    SideNavbarComponent,
    CardMatchComponent,
    TimerComponent,
    LoginComponent,
    UserInfoComponent,
    SetupComponent,
    GameplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule,
    CountdownModule,
    MatSnackBarModule  
  ],
  providers: [CountdownModule, TimerComponent, SideNavbarComponent, CardMatchComponent, GameplayComponent],
  bootstrap: [AppComponent]
})


export class AppModule { }

