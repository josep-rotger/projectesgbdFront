import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JocsComponent } from './jocs/jocs.component';
import { JocComponent } from './joc/joc.component';

@NgModule({
  declarations: [
    AppComponent, JocsComponent, JocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
