import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(private router:Router) {

  }

  ngOnInit(): void {
  }


}
