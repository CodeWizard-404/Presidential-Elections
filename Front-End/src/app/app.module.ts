import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseChartDirective } from 'ng2-charts';  // Correct module import

import { Chart } from 'chart.js';




// Import your components here
import { HomeComponent } from './components/main/home/home.component';
import { HeaderComponent } from './components/main/header/header.component';
import { FooterComponent } from './components/main/footer/footer.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { CandidateListComponent } from './components/candidates/candidate-list/candidate-list.component';
import { CandidateDetailsComponent } from './components/candidates/candidate-details/candidate-details.component';
import { ResultsComponent } from './components/results/results/results.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';

import { FilterPipe } from './pipes/search.pipe';
import { SortPipe } from './pipes/sort.pipe';


// Import the RouterModule with your routes
import { RouterModule } from '@angular/router';
import { AppRoutingModule, routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,

    LoginComponent,
    RegisterComponent,
    ProfileComponent,

    CandidateListComponent,
    CandidateDetailsComponent,
    ResultsComponent,

    FilterPipe,
    SortPipe,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    Chart,
    BaseChartDirective,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
