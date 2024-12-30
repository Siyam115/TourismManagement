import { HttpClient } from '@angular/common/http';
import { Component, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
  selectedDate: any;
  constructor(private http: HttpClient) {}

  saveDate() {
    if (this.selectedDate) {
      const formattedDate = new Date(this.selectedDate).toISOString(); // Format date
      const apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Replace with actual endpoint
      this.http.post(apiUrl, { date: formattedDate }).subscribe({
        next: (response) => {
          alert('Date saved successfully!');
          console.log('Response:', response);
        },
        error: (err) => {
          console.error('Error saving date:', err);
          alert('Failed to save the date. Please try again later.');
        },
      });
    } else {
      alert('Please select a date before saving.');
    }
  }


  ngAfterViewInit() {
    new Chart('insightsGraph', {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Revenue',
            data: [5000, 10000, 7500, 15000, 12000, 20000],
            borderColor: '#4CAF50',
            backgroundColor: 'rgba(76, 175, 80, 0.2)',
            fill: true,
          },
          {
            label: 'Bookings',
            data: [50, 80, 65, 120, 95, 150],
            borderColor: '#FF9800',
            backgroundColor: 'rgba(255, 152, 0, 0.2)',
            fill: true,
          }
        ]
      }
    });
  }
 
}