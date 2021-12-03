import { Component, OnInit , OnDestroy} from '@angular/core';
import {HttpService} from "./http.service";
import {Data} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  users: Data[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit(){
    this.httpService.getData().subscribe((data: any) => this.users=data["data"]);
  }
}
