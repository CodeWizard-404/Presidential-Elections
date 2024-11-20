import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
interface Candidate {
  name: string;
  votes: number;
  votePercentage?: number;  // votePercentage is optional initially
}
@Component({
  selector: 'app-results',
  imports: [CommonModule ],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent  implements OnInit {
  // Now we are using the Candidate interface
  candidates: Candidate[] = [
    { name: 'John Doe', votes: 5000 },
    { name: 'Jane Smith', votes: 4000 },
    { name: 'Alice Johnson', votes: 3500 },
    { name: 'Bob Brown', votes: 3000 },
    { name: 'Charlie White', votes: 2500 },
    { name: 'Diana Green', votes: 2000 },
    { name: 'Emily Blue', votes: 1500 }
  ];

  sortedCandidates: Candidate[] = [];
  totalVotes: number = 0;

  ngOnInit(): void {
    // Calculate the total votes
    this.totalVotes = this.candidates.reduce((sum, candidate) => sum + candidate.votes, 0);

    // Calculate vote percentage for each candidate
    this.candidates = this.candidates.map(candidate => ({
      ...candidate,
      votePercentage: (candidate.votes / this.totalVotes) * 100
    }));

    // Sort candidates by votes in descending order
    this.sortedCandidates = [...this.candidates].sort((a, b) => b.votes - a.votes);

    // Initialize the charts after data is set
    this.createVoteChart();
    this.createTopCandidatesChart();
  }

  createVoteChart() {
    const voteChart = new Chart('voteChart', {
      type: 'doughnut',
      data: {
        labels: this.candidates.map(c => c.name),
        datasets: [{
          label: 'Votes per Candidate',
          data: this.candidates.map(c => c.votes),
          backgroundColor: ['#ff5733', '#33b5ff', '#ff33a8', '#4caf50', '#ffeb3b', '#9c27b0', '#ff9800'],
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        }
      }
    });
  }

  createTopCandidatesChart() {
    const topCandidatesChart = new Chart('topCandidatesChart', {
      type: 'bar',
      data: {
        labels: this.sortedCandidates.slice(0, 5).map(c => c.name),
        datasets: [{
          label: 'Vote Percentage',
          data: this.sortedCandidates.slice(0, 5).map(c => c.votePercentage),
          backgroundColor: '#4caf50',
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Candidates'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Percentage (%)'
            },
            beginAtZero: true,
            max: 100
          }
        }
      }
    });
  }
}