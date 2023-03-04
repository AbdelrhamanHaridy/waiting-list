import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {



  @Input() hideFooter: boolean;

  //Get Year
  year = new Date().getFullYear()

  constructor( public translate: TranslateService) { }

  ngOnInit(): void {
  }
  top(){
    window.scroll(0,0);
  }
}
