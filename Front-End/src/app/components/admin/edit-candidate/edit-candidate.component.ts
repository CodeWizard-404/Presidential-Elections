import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit-candidate',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './edit-candidate.component.html',
  styleUrl: './edit-candidate.component.css'
})
export class EditCandidateComponent implements OnInit {
  candidate = {
    name: '',
    position: ''
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Fetch candidate details from the route params or backend
    const candidateId = this.route.snapshot.paramMap.get('id');
    console.log('Editing candidate with ID:', candidateId);

    // Placeholder: Simulate fetching candidate data
    this.candidate = {
      name: 'John Doe',
      position: 'President'
    };
  }

  onSubmit(): void {
    // Placeholder logic for updating a candidate
    console.log('Candidate updated:', this.candidate);

    // Redirect to the Admin Dashboard after updating
    this.router.navigate(['/admin-dashboard']);
  }
}
