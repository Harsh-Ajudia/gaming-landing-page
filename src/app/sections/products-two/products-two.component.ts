import { Component, OnInit } from '@angular/core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-products-two',
  templateUrl: './products-two.component.html',
  styleUrls: ['./products-two.component.css']
})
export class ProductsTwoComponent implements OnInit {
  faAngleRight = faAngleRight;
  constructor() { }

  ngOnInit() {
  }

}
