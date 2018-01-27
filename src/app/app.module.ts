import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { MainModule } from './main/main.module';
import { StorageService } from './services/storage.service';
import { TradeService } from './services/trade.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing';
import { AuthGuard } from './auth/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { UserService } from './services/user.service';
import { MatProgressSpinnerModule } from '@angular/material';
import { LoaderModule } from './loader/loader.module';


const config = {
  apiKey: 'AIzaSyDHGtwlww4PJVqSgr7onPEJHHCGwVWydII',
  authDomain: 'trading-95678.firebaseapp.com',
  databaseURL: '//trading-95678.firebaseio.com',
  projectId: 'trading-95678',
  storageBucket: 'trading-95678.appspot.com',
  messagingSenderId: '64909653421'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AuthModule,
    LoaderModule,

    BrowserAnimationsModule,

    AppRoutingModule
  ],
  providers: [
    StorageService,
    TradeService,
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
