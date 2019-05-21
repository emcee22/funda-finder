import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HouseListComponent } from './components/house-list/house-list.component';
import { HouseDetailsComponent } from './components/house-details/house-details.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SearchComponent } from './components/search/search.component';
import { HouseListItemComponent } from './components/house-list-item/house-list-item.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HouseListComponent,
    HouseDetailsComponent,
    WelcomeComponent,
    LoaderComponent,
    SearchComponent,
    HouseListItemComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
