import { Component, OnInit } from '@angular/core';
import { Emmiters } from '../emmiters/emmiter';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isLogin: boolean;
  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  ngOnInit(): void {
    Emmiters.authEmitter.subscribe(auth => {
      this.isLogin = auth;
    })
  }

  logout(): void {
    this.http.get('http://localhost:8080/api/logout', {withCredentials: true}).subscribe(res=>{
      this.router.navigate(["/login"])
    })
  }

}
