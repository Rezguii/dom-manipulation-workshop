import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChildrenComponent } from './children/children.component';
import { SubchildrenComponent } from './subchildren/subchildren.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildrenComponent,
    SubchildrenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
