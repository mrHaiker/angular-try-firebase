import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public auth: FormGroup;
  public emailFormControl: FormControl;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.auth = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', Validators.required]
    })
  }

  login() {
    console.log('thisAuth', this.auth.value);
  }
}
