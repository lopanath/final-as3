import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataService } from '../../Service/data.service';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {
  constructor(private _dataser: DataService) {}
  Data: any[] = [];
  ngOnInit(): void {
    this.Data= this._dataser.data;
  }

}
