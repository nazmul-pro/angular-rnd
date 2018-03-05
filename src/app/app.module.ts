import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_CONFIG, AppConfig } from './config/app.config';
import { HomeService } from './home/home.service';
import { PreparationService } from './preparation/preparation.service';
import { ExamListService } from './exam-list/exam-list.service';
import { LiveService } from './live/live.service';
import { PagerService } from './shared/pager.service';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ExamListComponent } from './exam-list/exam-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LiveComponent } from './live/live.component';
import { PreparationComponent } from './preparation/preparation.component';
import { WarmupComponent } from './warmup/warmup.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
const appRoutes: Routes = [
  { path: 'live', component: ExamListComponent },
  { path: '', component: HomeComponent },
  { path: 'live/:dt/:date/:tm/:time', component: LiveComponent },
  { path: 'preparation', component: PreparationComponent },
  { path: 'warmup', component: WarmupComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ExamListComponent,
    HomeComponent,
    LiveComponent,
    PreparationComponent,
    WarmupComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    CoreModule,
    SharedModule,
    HttpModule
  ],
  providers: [{provide: APP_CONFIG, useValue: AppConfig}, HomeService, PreparationService, ExamListService, LiveService, PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
