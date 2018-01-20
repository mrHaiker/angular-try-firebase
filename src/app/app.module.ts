import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { MainModule } from './main/main.module';
import { StorageService } from './services/storage.service';
import { TradeService } from './services/trade.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainModule
  ],
  providers: [
    StorageService,
    TradeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
