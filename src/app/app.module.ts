import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { MainModule } from './pages/main/main.module';
import { StorageService } from './services/storage.service';
import { TradeService } from './services/trade.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthModule } from './pages/auth/auth.module';
import { AppRoutingModule } from './app-routing';
import { AuthGuard } from './pages/auth/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './services/user.service';
import { LoaderModule } from './components/loader/loader.module';
import { HttpClientModule } from '@angular/common/http';
import 'hammerjs';


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
    AngularFireModule.initializeApp(config, 'trade-api'),
    AuthModule,
    LoaderModule,
    HttpClientModule,

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
