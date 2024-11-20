import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-candidate-details',
  imports: [CommonModule, FormsModule,],
  templateUrl: './candidate-details.component.html',
  styleUrl: './candidate-details.component.css'
})
export class CandidateDetailsComponent implements OnInit {
  
    candidateId: any;
    newComment: string = '';
    //candidateId: string | null = null;

  
    constructor(private route: ActivatedRoute) { }
  
    ngOnInit(): void {
      //this.candidateId = this.route.snapshot.paramMap.get('id');

      this.candidateId = {
        name: 'John Doe',
        party: 'Party A',
        bio: 'Focused on education reform, better healthcare, and job creation.',
        photoUrl: 'https://via.placeholder.com/150',
        isFavorite: false,
        comments: [
          { username: 'Alice', text: 'Great candidate! I support his vision.' },
          { username: 'Bob', text: 'His focus on education is crucial.' }
        ]
      };
    }
  
    toggleFavorite(candidateId: any): void {
      candidateId.isFavorite = !candidateId.isFavorite;
    }
  
    vote(candidateId: any): void {
      alert(`You have voted for ${candidateId.name}`);
    }
  
    addComment(candidateId: any): void {
      if (this.newComment.trim()) {
        candidateId.comments.push({
          username: 'You',
          text: this.newComment
        });
        this.newComment = ''; 
      }
    }
  }
  