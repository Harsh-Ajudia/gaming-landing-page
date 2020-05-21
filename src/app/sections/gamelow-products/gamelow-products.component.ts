import { Component, OnInit } from '@angular/core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-gamelow-products',
  templateUrl: './gamelow-products.component.html',
  styleUrls: ['./gamelow-products.component.css']
})
export class GamelowProductsComponent implements OnInit {
  faAngleRight = faAngleRight;
  constructor() { }

  ngOnInit() {
  }

}
