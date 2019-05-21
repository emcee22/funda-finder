import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseDetailsComponent } from './house-details.component';
import { LoaderComponent } from '../loader/loader.component';
import { ListComponent } from '../list/list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

describe('HouseDetailsComponent', () => {
  let component: HouseDetailsComponent;
  let fixture: ComponentFixture<HouseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HouseDetailsComponent, LoaderComponent, ListComponent],
      imports: [NgbModule.forRoot(), RouterModule.forRoot([]), HttpClientModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
