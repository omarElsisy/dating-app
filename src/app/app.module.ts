import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ViewComponent } from 'src/view/view.component';
// import { ViewComponent } from '.c:/Users/omar/Desktop/Dating app/DatingApp-SPA/src/view/view.component';


@NgModule({
  declarations: [		
    AppComponent,
      ViewComponent
     
   ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
