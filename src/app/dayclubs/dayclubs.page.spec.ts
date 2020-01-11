import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DayclubsPage } from './dayclubs.page';

describe('DayclubsPage', () => {
  let component: DayclubsPage;
  let fixture: ComponentFixture<DayclubsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayclubsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DayclubsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
