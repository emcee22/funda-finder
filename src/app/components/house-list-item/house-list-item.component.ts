import { Component, OnInit, Input } from '@angular/core';
import { ISearchObject } from '../../interfaces/funda.interface';

@Component({
  selector: 'app-house-list-item',
  templateUrl: './house-list-item.component.html',
  styleUrls: ['./house-list-item.component.scss']
})
export class HouseListItemComponent implements OnInit {
  @Input() item: ISearchObject;
  constructor() {}

  ngOnInit() {}
}
