import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DataService } from '../../../Service/data.service';



@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent implements OnInit{

  constructor(private _data: DataService, private activeRoute : ActivatedRoute) {}

  data: any;
  ID : any = 0;
  ngOnInit(): void {
    this.ID = this.activeRoute.snapshot.params['id'];
    this.data = this._data.data.find((x) => x.id == this.ID);
  }
  
}

