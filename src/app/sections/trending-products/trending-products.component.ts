import { Component, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-trending-products',
  templateUrl: './trending-products.component.html',
  styleUrls: ['./trending-products.component.css']
})
export class TrendingProductsComponent implements OnInit {
  faHeart = faHeart;
  constructor() { }

  ngOnInit() {
  }

}
