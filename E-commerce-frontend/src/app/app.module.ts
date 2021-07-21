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
import { FormsModule } from '@angular/forms';
import { SpecService } from './services/spec.service';
import { SpecViewComponent } from './components/spec-view/spec-view.component';
import { MessagesComponent } from './components/messages/messages.component';


@NgModule({
  declarations: [
    AppComponent,
    CellphoneListComponent,
    PageNotFoundComponent,
    FooterComponent,
    SpecViewComponent,
    MessagesComponent
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // RouterModule.forRoot(routes)
    AppRoutingModule,
    FormsModule

  ],
  providers: [
    CellphoneService,
    SpecService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
