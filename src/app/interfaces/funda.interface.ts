export interface ISearchObject {
  Id: string;
  FotoMedium: string;
  Woonplaats: string;
  Adres: string;
  Postcode: string;
  MakelaarNaam: string;
  Koopprijs: string;
  VerkoopStatus: string;
  AangebodenSindsTekst: string;
}

export interface ISearch {
  Objects: ISearchObject[];
}

interface IEnergielabel {
  Label: string;
}

export interface IFullObject {
  Adres: string;
  Postcode: string;
  VerkoopStatus: string;
  AangebodenSindsTekst: string;
  PrijsGeformatteerd: string;
  Makelaar: string;
  Bouwjaar: string;
  Bouwvorm: string;
  EigendomsSituatie: string;
  Voorzieningen: string;
  Media: any;
  SoortGarage: string;
  Isolatie: string;
  Energielabel: IEnergielabel;
}
