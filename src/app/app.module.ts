import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { AppChildComponent } from './components/app-child/app-child.component';
import { FormChildComponent } from './components/form-child/form-child.component';
@NgModule({
  declarations: [
    AppComponent,
    AppChildComponent,
    FormChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
