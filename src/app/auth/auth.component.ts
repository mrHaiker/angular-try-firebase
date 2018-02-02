import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { LoaderService } from '../loader/loader.service';
import { TradeService } from '../services/trade.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private loader: LoaderService,
    private tradeService: TradeService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', Validators.required]
    });

    this.tradeService.ticketsStream$.subscribe(
      val => console.log('val', val)
    );
  }

  login() {
    if (this.loginForm.invalid) return;

    this.loader.show();
    this.auth.login(this.loginForm.value).subscribe(
      val => this.router.navigate(['home'])
    ).add(() => this.loader.hide());
  }

  getData() {
    console.log('should get data');
  }
}
