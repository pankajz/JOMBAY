import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { TinymceModule } from 'angular2-tinymce';

import { AppComponent } from './app.component';
import { WebservicesService } from './webservices.service';
import { StorageService } from './storage.service';
import { HeaderComponent } from './header/header.component';
import { QuestionsComponent } from './questions/questions.component';
import {MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [
    WebservicesService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
