import { Component } from '@angular/core';

@Component({
  selector: 'app-onlinepayment',
  templateUrl: './onlinepayment.component.html',
  styleUrls: ['./onlinepayment.component.scss']
})
export class OnlinepaymentComponent {
  activePaymentMethod: string = ''; // Holds the selected payment method

  // Method to update the active payment method
  setActivePaymentMethod(method: string): void {
    this.activePaymentMethod = method;
  }

  // Validate form data and handle payment
  handlePayment(method: string, formId: string): void {
    const form = document.getElementById(formId) as HTMLFormElement;

    if (form && this.validateForm(form)) {
      alert(`Payment via ${method} was successful!`);
    } else {
      alert(`Please fill in all required fields for ${method} payment.`);
    }
  }

  // Form validation logic
  private validateForm(form: HTMLFormElement): boolean {
    const inputs = form.querySelectorAll('input');
    for (let i = 0; i < inputs.length; i++) {
      if (!inputs[i].value.trim()) {
        return false; // If any field is empty, return false
      }
    }
    return true; // All fields are filled
  }

}
