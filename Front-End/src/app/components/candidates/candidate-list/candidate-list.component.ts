import { Component, OnInit } from "@angular/core";
import { CandidateDetailsComponent } from "../candidate-details/candidate-details.component";
import { FilterPipe } from "../../../pipes/search.pipe";
import { SortPipe } from "../../../pipes/sort.pipe";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import * as bootstrap from 'bootstrap';


@Component({
  selector: "app-candidate-list",
  imports: [FilterPipe, FormsModule, CommonModule, SortPipe],
  templateUrl: "./candidate-list.component.html",
  styleUrl: "./candidate-list.component.css",
})
export class CandidateListComponent implements OnInit {
candidates = [
  {
    id: 1,
    name: "Ahmed Ben Salah",
    party: "Party A",
    bio: "Committed to economic growth.",
    photoUrl: "https://via.placeholder.com/150",
    favorites: false,
    comments: [
      { username: 'Alice', text: 'Great candidate! I support his vision.',date:"08/08/2002" },
      { username: 'Bob', text: 'His focus on education is crucial.' }
    ] // Empty comments array for now
  },
  {
    id: 2,
    name: "Fatma Jaziri",
    party: "Party B",
    bio: "Advocating for women's rights.",
    photoUrl: "https://via.placeholder.com/50",
    favorites: true,
    comments: []  // Empty comments array for now
  },
  {
    id: 3,
    name: "Mohamed Bouazizi",
    party: "Party C",
    bio: "Passionate about social justice.",
    photoUrl: "https://via.placeholder.com/50",
    favorites: false,
    comments: []  // Empty comments array for now
  },
  {
    id: 4,
    name: "Amira Khelil",
    party: "Party D",
    bio: "Focused on healthcare improvements.",
    photoUrl: "https://via.placeholder.com/50",
    favorites: true,
    comments: []  // Empty comments array for now
  },
  {
    id: 5,
    name: "Sami Trabelsi",
    party: "Party E",
    bio: "Championing youth empowerment.",
    photoUrl: "https://via.placeholder.com/50",
    favorites: false,
    comments: []  // Empty comments array for now
  }
];


  sortedCandidates = [...this.candidates];
  dropdownOpen: boolean = false;
  selectedSortOption: string = "";
  searchTerm: string = "";
  selectedCandidate: any;  // Store selected candidate for modal
  newComment: string = '';  // Comment input

  constructor() {}

  ngOnInit(): void {}

  toggleFavorite(candidate: any): void {
    candidate.favorites = !candidate.favorites;
    this.sortedCandidates = [...this.candidates];
  }

  openModal(candidate: any): void {
    this.selectedCandidate = candidate;
    const modal = new bootstrap.Modal(document.getElementById('candidateModal')!); // Now bootstrap will be recognized
    modal.show();  // Show modal when button is clicked
  }

  // Close the modal
  closeModal(): void {
    this.selectedCandidate = null;
  }

  sort(option: string): void {
    this.selectedSortOption = option;
    this.dropdownOpen = false;
  
    if (option === "name") {
      this.sortedCandidates.sort((a, b) => a.name.localeCompare(b.name));
    } else if (option === "party") {
      this.sortedCandidates.sort((a, b) => a.party.localeCompare(b.party));
    } else if (option === "favorites") {
      // Sort favorites in ascending order (smallest to largest)
      this.sortedCandidates.sort(
        (a, b) => Number(a.favorites) - Number(b.favorites)  // Change this line to ascending order
      );
    }
  }
  
  
  
  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
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
