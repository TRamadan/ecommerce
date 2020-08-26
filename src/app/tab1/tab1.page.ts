import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;
  @ViewChild('slideWithNav2', { static: false }) slideWithNav2: IonSlides;
  @ViewChild('slideWithNav3', { static: false }) slideWithNav3: IonSlides;

  sliderOne: any;
  sliderTwo: any;
  sliderThree: any;


  constructor(private router: Router) { }

  gotocart() {
    this.router.navigateByUrl("/cart")
  }

  gotonotification() {
    this.router.navigateByUrl("/notification")
  }


  gotocategories() {
    this.router.navigateByUrl("/categories")
  }

  ngOnInit() {
    this.sliderOne =
      {
        isBeginningSlide: true,
        isEndSlide: false,
        slidesItems: [
          {
            id: 995
          },
          {
            id: 925
          },
          {
            id: 940
          },
          {
            id: 943
          },
          {
            id: 944
          }
        ]
      };
    //Item object for Food
    this.sliderTwo =
      {
        isBeginningSlide: true,
        isEndSlide: false,
        slidesItems: [
          {
            id: 324
          },
          {
            id: 321
          },
          {
            id: 435
          },
          {
            id: 524
          },
          {
            id: 235
          }
        ]
      };
    //Item object for Fashion
    this.sliderThree =
      {
        isBeginningSlide: true,
        isEndSlide: false,
        slidesItems: [
          {
            id: 643
          },
          {
            id: 532
          },
          {
            id: 232
          },
          {
            id: 874
          },
          {
            id: 193
          }
        ]
      };
  }
  //Configuration for each Slider
  slideOptsOne = {
    initialSlide: 1,
    slidesPerView: 2,
    autoplay: false,
    centeredSlides: true,
    spaceBetween: 5
  };
  slideOptsTwo = {
    initialSlide: 1,
    slidesPerView: 2,
    loop: false,
    centeredSlides: true,
    spaceBetween: 1
  };
  slideOptsThree = {
    initialSlide: 0,
    slidesPerView: 3,
    centeredSlides: true
  };
  //Move to Next slide
  slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  //Move to previous slide
  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });;
  }

  //Method called when slide is changed by drag or navigation
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  //Call methods to check if slide is first or last to enable disbale navigation  
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }

}
