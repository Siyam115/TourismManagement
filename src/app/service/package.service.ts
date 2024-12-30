import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  setSelectedOffer(offerData: any) {
    throw new Error('Method not implemented.');
  }

  private selectedPackage: any = null;
  private selectedOffers:any =null;

  setSelectedPackage(packageData: any) {
    this.selectedPackage = packageData;
  }

  getSelectedPackage() {
    return this.selectedPackage;
  }
  setSelectedOffers(packageData: any) {
    this.selectedOffers = packageData;
  }

  getSelectedOffers() {
    return this.selectedOffers;
  }


}
