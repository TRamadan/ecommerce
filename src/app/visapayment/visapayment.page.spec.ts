import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisapaymentPage } from './visapayment.page';

describe('VisapaymentPage', () => {
  let component: VisapaymentPage;
  let fixture: ComponentFixture<VisapaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisapaymentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisapaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
