import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  totalUsers: number = 1200;
  totalVotes: number = 5000;
  totalCandidates: number = 25;

  // Added id for each candidate
  candidates = [
    { id: 1, name: 'John Doe', position: 'President' },
    { id: 2, name: 'Jane Smith', position: 'Secretary' },
    { id: 3, name: 'Sam Brown', position: 'Treasurer' }
  ];

  comments = [
    { user: 'User1', text: 'Great candidate!', status: 'Pending' },
    { user: 'User2', text: 'Needs more experience.', status: 'Approved' },
    { user: 'User3', text: 'I support this candidate!', status: 'Pending' }
  ];

  constructor() {}

  ngOnInit(): void {
    // Fetch data for platform stats, candidates, and comments
    // Example: this.fetchPlatformStats(), this.fetchCandidates(), this.fetchComments()
  }

  addCandidate(): void {
    // Logic to add a new candidate (can be replaced with actual form or modal)
    console.log('Add new candidate');
  }

  editCandidate(candidate: any): void {
    // Logic to edit a selected candidate
    console.log('Edit candidate:', candidate);
  }

  deleteCandidate(candidate: any): void {
    // Logic to delete a selected candidate
    const index = this.candidates.indexOf(candidate);
    if (index !== -1) {
      this.candidates.splice(index, 1);
    }
    console.log('Deleted candidate:', candidate);
  }

  approveComment(comment: any): void {
    // Approve comment
    comment.status = 'Approved';
    console.log('Approved comment:', comment);
  }

  deleteComment(comment: any): void {
    // Delete comment
    const index = this.comments.indexOf(comment);
    if (index !== -1) {
      this.comments.splice(index, 1);
    }
    console.log('Deleted comment:', comment);
  }
}
