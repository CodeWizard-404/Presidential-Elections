import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-candidate',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './add-candidate.component.html',
  styleUrl: './add-candidate.component.css'
})
export class AddCandidateComponent {

    candidate = {
      name: '',
      position: ''
    };
  
    constructor(private router: Router) {}
  
    onSubmit(): void {
      // Placeholder logic for saving a candidate
      console.log('Candidate added:', this.candidate);
  
      // Redirect to the Admin Dashboard after saving
      this.router.navigate(['/admin-dashboard']);
    }
  }
  