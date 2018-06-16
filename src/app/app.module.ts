import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PocetnaComponent } from './pages/pocetna/pocetna.component';
import { OnamaComponent } from './pages/onama/onama.component';

@NgModule({
  declarations: [
    AppComponent,
    PocetnaComponent,
    OnamaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
