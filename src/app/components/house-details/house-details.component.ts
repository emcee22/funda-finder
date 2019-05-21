import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// local services
import { FundaService } from '../../services/funda.service';

// local interfaces
import { IFullObject } from '../../interfaces/funda.interface';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.scss']
})
export class HouseDetailsComponent implements OnInit {
  house: IFullObject;
  houseImages = [];
  loader = false;
  list = {
    general: null,
    construction: null,
    energy: null
  };

  constructor(
    private route: ActivatedRoute,
    private fundaService: FundaService
  ) {}

  ngOnInit() {
    // get parameter from the url and request the details about the house
    this.loader = true;
    this.route.params.subscribe(params => {
      this.fundaService.getHouseById(params.id).subscribe(rsp => {
        this.house = rsp;

        // gather images so we can show the carousel
        this.houseImages = this.getHouseImages(rsp);

        // populate details so we can send to the list components
        this.list.general = this.getGeneralDetails(rsp);
        this.list.construction = this.getConstructionDetails(rsp);
        this.list.energy = this.getEnergyDetails(rsp);
        this.loader = false;
      });
    });
  }

  // get images only from category 6
  getHouseImages(house: IFullObject) {
    if (!house.Media) { return []; }
    const houseImages = [];
    house.Media.forEach(media => {
      if (media.MediaItems) {
        const images = media.MediaItems.filter(item => item.Category === 6)[0];
        if (images) { houseImages.push(images); }
      }
    });
    return houseImages;
  }

  // get general details
  getGeneralDetails(house: IFullObject) {
    const finalArr = [];
    finalArr.push({ label: 'Price', content: house.PrijsGeformatteerd });
    finalArr.push({
      label: 'Offered since',
      content: house.AangebodenSindsTekst
    });
    finalArr.push({ label: 'Status', content: house.VerkoopStatus });
    return finalArr;
  }

  // get construction details
  getConstructionDetails(house: IFullObject) {
    const finalArr = [];
    finalArr.push({ label: 'Year', content: house.Bouwjaar });
    finalArr.push({ label: 'Construction type', content: house.Bouwvorm });
    finalArr.push({ label: 'Type of Garage', content: house.SoortGarage });
    return finalArr;
  }

  // get energy details
  getEnergyDetails(house: IFullObject) {
    const finalArr = [];
    finalArr.push({ label: 'Insulation', content: house.Isolatie });
    finalArr.push({ label: 'Energy Label', content: house.Energielabel.Label });
    return finalArr;
  }
}
