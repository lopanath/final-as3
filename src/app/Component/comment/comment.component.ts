import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface Comment {
  name: string;
  text: string;
}
@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
  comments: Comment[] = [
    { name: 'Harshit', text: 'Very nice blogsss.' },
    { name: 'Garima', text: 'Great blog! Thanks for sharing.' },
  ];
  newComment: Comment = {
    name: '',
    text: ''
  };
  onSubmit() {
    this.comments.push(this.newComment);
    this.newComment = { name: '', text: '' };
  }
}