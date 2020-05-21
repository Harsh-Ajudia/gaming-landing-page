import { Component, OnInit } from '@angular/core';
import { faAngleRight, faStar } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.css']
})
export class FooterSectionComponent implements OnInit {
  faStar = faStar;
  constructor() { }

  ngOnInit() {
  }

}
