import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  @ViewChild("emailInput") emailInput: ElementRef;
  isChecked = false;
  value;
  email: string;
  contactForm: FormGroup;
  isSupmit = true;
  submitMessage = '';
  currentlang;
  Src = '';
  check = false;
  platforms = [
    {id: 1, name: "salla", arName: 'سله', img: 'assets/images/png/salla.png', isSelected: false},
    {id: 2, name: "zid", arName: 'زد', img: 'assets/images/png/z 1.png', isSelected: false},
    {id: 3, name: "Shopify", arName: 'شوبيفاى', img: 'assets/images/png/Shopify.png', isSelected: false},
    {id: 4, name: "instagram", arName: 'انستقرام', img: 'assets/images/png/instagram.png', isSelected: false},
  ];
  problems = [
    {id: 1, name: "search", arName: "ابحث عن كفاءة وجودة توصيل / شحن", isSelected: false},
    {id: 2, name: "want", arName: "ابغي اسعار مناسبة للشحن والتوصيل", isSelected: false},
    {id: 3, name: "follo", arName: "متابعة شحناتي لحظة بلحظة", isSelected: false},
    {id: 4, name: "company", arName: "شركة شحن توصل لكل مكان", isSelected: false},
    {id: 5, name: "someone", arName: "احد يساعدني في اختيار شركة الشحن", isSelected: false},
    {id: 6, name: "analysis", arName: "تحليل و تقارير لعملياتي اللوجستية", isSelected: false},
  ];
  private myform: AngularFirestoreCollection<any>
  constructor(
    public translate: TranslateService,
    public route: Router,
    private fb: FormBuilder,
    private http: HttpClient,
    private firestore: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      email: [null, [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      platforms: this.fb.array([]),
      otherPlatform: [''],
      problems: this.fb.array([]),
      otherProblem: [''],
    });
    this.myform = this.firestore.collection("clients")
    this.currentlang = localStorage.getItem("language");

    console.log(this.currentlang);

    this.switch();
  }

  onChangeItem(e){
    let platforms = this.contactForm.get('platforms') as FormArray;
    if(e.target.checked) {
      platforms.push(new FormControl(e.target.value))
    } else {
      let i = 0;
      platforms.controls.forEach(
        (p) => {
          if(p.value == e.target.value) {
            platforms.removeAt(i);
            return
          }
          i++
        }
      )
    }
  }
  onChangeProblem(e){
    let problems = this.contactForm.get('problems') as FormArray;
    if(e.target.checked) {
      problems.push(new FormControl(e.target.value))
    } else {
      let i = 0;
      problems.controls.forEach(
        (p) => {
          if(p.value == e.target.value) {
            problems.removeAt(i);
            return
          }
          i++
        }
      )
    }
  }
  switch() {
    if (this.currentlang === 'ar') {
      //  this.Src ='../../../assets/images/pay_ship_images/english.png';
      this.Src = '../../../assets/images/pay_ship_images/Group 5.png';


    } else {
      this.Src = '../../../assets/images/pay_ship_images/english.png';

    }
  }

  sginUp(value) {
    this.myform.add(value).then(res => {
      this.route.navigate(['/accept']);
      console.log(value);
    }).catch(err => {
      console.log("Error in publish");
    })

  }
  top() {
    window.scroll(0, 0);
  }

  onChange(isChecked) {
    this.value = isChecked;

  }
}


