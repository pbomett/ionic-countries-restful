import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  countries: string[];
  errorMessage: string;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {

  }

  ionViewDidLoad(){
    this.getCountries();
  }

  getCountries() {
    this.restProvider.getCountries()
       .subscribe(
         countries => this.countries = countries,
         error =>  this.errorMessage = <any>error);
  }

}
