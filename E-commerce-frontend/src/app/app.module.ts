import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';



import { AppComponent } from './app.component';
import { CellphoneListComponent } from './components/cellphone-list/cellphone-list.component';
import { CellphoneService } from './services/cellphone.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    CellphoneListComponent,
    PageNotFoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // RouterModule.forRoot(routes)
    AppRoutingModule

  ],
  providers: [
    CellphoneService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
