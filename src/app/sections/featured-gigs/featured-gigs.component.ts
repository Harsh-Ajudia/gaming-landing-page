import { Component, OnInit } from '@angular/core';
import { faAngleRight, faStar } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-featured-gigs',
  templateUrl: './featured-gigs.component.html',
  styleUrls: ['./featured-gigs.component.css']
})
export class FeaturedGigsComponent implements OnInit {
  faAngleRight = faAngleRight;
  faStar = faStar;
  constructor() { }

  ngOnInit() {
  }

}
