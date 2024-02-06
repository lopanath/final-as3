import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../Service/auth.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private temp:AuthService){}
  isVisible = false;
  toggleVisibility() {
    this.isVisible = !this.isVisible;

  }
  toggleVis() {
    this.isVisible = false;
    this.temp.logout();
    
  }

  

}
