import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [CommonModule,FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

    // Sample user profile data
    profile = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      bio: 'Software Developer passionate about building scalable applications.',
      password: '******',
      picture: 'https://via.placeholder.com/150'  
    };
  
    isEditing: boolean = false;
  
    constructor() { }
  
    // Switch to edit mode
    onEditProfile(): void {
      this.isEditing = true;
    }
  
    // Save changes after editing
    onSaveChanges(): void {
      if (this.profile.name && this.profile.email && this.profile.bio && this.profile.password) {
        console.log('Profile Updated', this.profile);
        this.isEditing = false;  // Switch back to view mode after saving
      }
    }
  }
  