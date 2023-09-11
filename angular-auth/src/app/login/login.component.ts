import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: '',
      password: ''
    });
  }

  submit(): void {
    this.http.post(
      'http://localhost:8080/api/login',
      this.loginForm.value,
      {
        withCredentials: true
      }).subscribe(res => {
      console.log('response:', res)
      this.router.navigate(['/']);
    })
  }

}
