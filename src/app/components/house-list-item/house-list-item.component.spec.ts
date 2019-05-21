import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseListItemComponent } from './house-list-item.component';
import { RouterTestingModule } from '@angular/router/testing';
describe('HouseListItemComponent', () => {
  let component: HouseListItemComponent;
  let fixture: ComponentFixture<HouseListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HouseListItemComponent],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
