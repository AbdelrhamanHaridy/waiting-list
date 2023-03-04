
import { Component, OnInit, OnChanges, Input, HostListener } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

import { TranslateService } from "@ngx-translate/core";
import { BehaviorSubject } from "rxjs";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() navClass: string;
  @Input() buttonList: boolean;
  @Input() sliderTopbar: boolean;
  @Input() isdeveloper: boolean;
  @Input() shopPages: boolean;

  @HostListener("window:scroll")

  logoURL: string
  darkMode: BehaviorSubject<any> = new BehaviorSubject(localStorage.getItem("theme-mode"));
  darkLogo: boolean
  windowScrollPosition: number;
  @HostListener("window:scroll")
  navPosition() { this.windowScrollPosition = window.scrollY }

  constructor(private router: Router,  public translate: TranslateService) {

  }



  ngOnInit(): void {

  }


  windowScroll() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById("topnav")?.classList.add("nav-sticky");
    } else {
      document.getElementById("topnav")?.classList.remove("nav-sticky");
    }

  }
  changeMode(mode) {
    this.logoURL = `../../../assets/images/png/Asset 2.png`
    // this.logoURL = `../../../assets/images/logos/${mode}-logo.png`
    //  this.logoURL = `../../.././assets/images/png/Asset 2.png`
  }
}
