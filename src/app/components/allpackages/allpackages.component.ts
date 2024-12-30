import { Component } from '@angular/core';
import { PackageService } from 'src/app/service/package.service';

@Component({
  selector: 'app-allpackages',
  templateUrl: './allpackages.component.html',
  styleUrls: ['./allpackages.component.scss']
})
export class AllPackagesComponent {
  packages = [
    { name: 'Family Pack', price: 40, membersIncluded: 4, image: 'https://images.saymedia-content.com/.image/t_share/MTk4MDE5NTIyNzQ4MjI4NzY5/family-vacation-quotes-and-caption-ideas.png' },
    { name: 'Couple Pack', price: 30, membersIncluded: 2, image: 'https://www.vietexperttravel.com/kcfinder/upload/images/couple.jpg' },
    { name: 'Budget-Friendly Pack', price: 20, membersIncluded: 1, image: 'assets/images/family-pack.jpg' },
    { name: 'Student Pack', price: 15, membersIncluded: 1, image: 'assets/images/family-pack.jpg' },
    { name: 'Combo Pack', price: 60, membersIncluded: 6, image: 'assets/images/family-pack.jpg' },
    { name: 'Adventure Pack', price: 50, membersIncluded: 5, image: 'assets/images/family-pack.jpg' }
  ];

  offers = [
    { name: 'Beach Getaway', price: 25, discount: 20, membersIncluded: 5, image: 'assets/images/summer-sale.jpg' },
    { name: 'Mountain Adventure', price: 35, discount: 15, membersIncluded: 4, image: 'assets/images/holiday-special.jpg' },
    { name: 'City Lights Getaway', price: 45, discount: 10, membersIncluded: 3, image: 'assets/images/weekend-bonanza.jpg' }
  ];

  constructor(private packageService: PackageService) {}

  // Set selected package and navigate to payment page
  selectPackage(packageData: any) {
    this.packageService.setSelectedPackage(packageData);
  }

  // Set selected offer and navigate to payment page
  selectOffer(offerData: any) {
    this.packageService.setSelectedOffer(offerData);
  }
}
