import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Emmiters } from '../emmiters/emmiter';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  message: string;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8080/api/user', {withCredentials: true}).subscribe((res: any) => {
      this.message = `Hi ${res.name}`;
      Emmiters.authEmitter.next(true);
    },
    err => {
      this.message = 'You are not log in';
      Emmiters.authEmitter.next(false);
    })
  }

}
