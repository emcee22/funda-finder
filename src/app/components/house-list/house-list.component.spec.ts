import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseListComponent } from './house-list.component';
import { SearchComponent } from '../search/search.component';
import { LoaderComponent } from '../loader/loader.component';
import { HouseListItemComponent } from '../house-list-item/house-list-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
describe('HouseListComponent', () => {
  let component: HouseListComponent;
  let fixture: ComponentFixture<HouseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HouseListComponent,
        SearchComponent,
        LoaderComponent,
        HouseListItemComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([]),
        HttpClientModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
