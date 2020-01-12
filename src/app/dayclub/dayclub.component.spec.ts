import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DayclubComponent } from './dayclub.component';

describe('DayclubComponent', () => {
  let component: DayclubComponent;
  let fixture: ComponentFixture<DayclubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayclubComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DayclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
