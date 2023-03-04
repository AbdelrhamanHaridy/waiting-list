import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accept',
  templateUrl: './accept.component.html',
  styleUrls: ['./accept.component.css']
})
export class AcceptComponent implements OnInit {

  constructor(public translate: TranslateService,public route:Router) { }

  ngOnInit(): void {
  }
go(){
  this.route.navigate(['/index']);
}
}
