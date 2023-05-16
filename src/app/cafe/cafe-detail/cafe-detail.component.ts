import { Component, Input, OnInit } from '@angular/core';
import { Cafe } from '../cafe';

@Component({
  selector: 'app-cafe-detail',
  templateUrl: './cafe-detail.component.html',
  styleUrls: ['./cafe-detail.component.css']
})
export class CafeDetailComponent implements OnInit {

  @Input() cafeDetail!: Cafe;

  constructor() { }

  ngOnInit() {
  }

}
