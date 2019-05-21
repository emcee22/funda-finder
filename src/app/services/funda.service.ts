import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// local interfaces
import {
  ISearch,
  ISearchObject,
  IFullObject
} from '../interfaces/funda.interface';

@Injectable({
  providedIn: 'root'
})
export class FundaService {
  apiKey = 'ac1b0b1572524640a0ecc54de453ea9f';
  apiRoot = 'http://partnerapi.funda.nl/feeds/Aanbod.svc/json/';

  houses: ISearchObject[] = [];

  constructor(private http: HttpClient) {}

  search(city: string): Observable<ISearch> {
    const api = `${this.apiRoot}${this.apiKey}/?type=koop&zo=/${city}/`;
    return this.http.get<ISearch>(api);
  }

  getHouseById(id: string): Observable<IFullObject> {
    const api = `${this.apiRoot}detail/${this.apiKey}/koop/${id}/`;
    return this.http.get<IFullObject>(api);
  }
}
