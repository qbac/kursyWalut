import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {CurrencySelectComponent} from './currency-select.component';
import {MyPipe} from './my.pipes';
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent,CurrencySelectComponent, MyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
