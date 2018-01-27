import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainService } from './main.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    AngularFireDatabaseModule
  ],
  declarations: [MainComponent],
  exports: [MainComponent],
  providers: [MainService]
})
export class MainModule { }
