import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CellphoneListComponent } from './components/cellphone-list/cellphone-list.component';
import { CellphoneService } from './services/cellphone.service';

@NgModule({
  declarations: [
    AppComponent,
    CellphoneListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    CellphoneService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
