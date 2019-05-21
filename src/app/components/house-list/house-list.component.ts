import { Component, OnInit } from '@angular/core';

// local services
import { FundaService } from '../../services/funda.service';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.scss']
})
export class HouseListComponent implements OnInit {
  loading = false;
  constructor(private fundaService: FundaService) {}

  ngOnInit() {}

  // when form is changed we want to repopulate with new entries
  manageFormChange(city: string) {
    this.loading = true;
    this.fundaService.houses = [];
    this.fundaService.search(city).subscribe(rsp => {
      this.fundaService.houses = rsp.Objects;
      this.loading = false;
    });
  }
}
