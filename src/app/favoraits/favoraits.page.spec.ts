import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FavoraitsPage } from './favoraits.page';

describe('FavoraitsPage', () => {
  let component: FavoraitsPage;
  let fixture: ComponentFixture<FavoraitsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoraitsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FavoraitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
