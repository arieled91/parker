import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarFormViewPage } from './car-form-view.page';

describe('CarFormPage', () => {
  let component: CarFormViewPage;
  let fixture: ComponentFixture<CarFormViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarFormViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarFormViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
