import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { EducationComponent } from './education/education.component';
import { TechnicalskillsComponent } from './technicalskills/technicalskills.component';


@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    EducationComponent,
    TechnicalskillsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
