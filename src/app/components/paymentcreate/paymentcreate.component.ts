import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PackageService } from 'src/app/service/package.service';

@Component({
  selector: 'app-paymentcreate',
  templateUrl: './paymentcreate.component.html',
  styleUrls: ['./paymentcreate.component.scss'],
})
export class PaymentcreateComponent implements OnInit {
  selectedPackage: any = null;
  selectedOffers: any = null;
  selectedMembers: number = 1;
  totalPrice: number = 0;

  userName = '';
  userAddress = '';
  userEmail = '';

  constructor(private packageService: PackageService, private router: Router) {}

  ngOnInit() {
    this.selectedPackage = this.packageService.getSelectedPackage();
    this.selectedOffers = this.packageService.getSelectedOffers(); // Assuming this method exists in the service.

    if (this.selectedPackage) {
      this.selectedMembers = this.selectedPackage.membersIncluded;
      this.updateTotalPrice();
    } else if (this.selectedOffers) {
      this.selectedMembers = this.selectedOffers.membersIncluded;
      this.updateTotalPrice();
    }
  }

  updateTotalPrice() {
    if (this.selectedPackage) {
      this.totalPrice =
        this.selectedPackage.price *
        (this.selectedMembers / this.selectedPackage.membersIncluded);
    } else if (this.selectedOffers) {
      this.totalPrice =
        this.selectedOffers.price *
        (this.selectedMembers / this.selectedOffers.membersIncluded);
    }
  }

  onFormSubmit() {
    if (this.userName && this.userAddress && this.userEmail && this.selectedMembers > 0) {
      const selectedItem = this.selectedPackage || this.selectedOffers;

      this.router.navigate(['/online-payment'], {
        queryParams: {
          itemName: selectedItem?.name,
          userName: this.userName,
          userAddress: this.userAddress,
          userEmail: this.userEmail,
          totalPrice: this.totalPrice.toFixed(2),
        },
      });
    } else {
      alert('Please fill in all required fields before submitting.');
    }
  }
}
