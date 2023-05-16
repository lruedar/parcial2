import { Component, OnInit } from '@angular/core';
import { Cafe } from './cafe';
import { CafeService } from './cafe.service';

@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.css']
})
export class CafeComponent implements OnInit {

  cafes:Array<Cafe> = [];
  selectedCafe!:Cafe;
  selected = false;

  constructor(private cafeService:CafeService) {}

  getCafes(){
    this.cafeService.getCafes().subscribe(cafes => {
      this.cafes = cafes;
    });
  }

  onSelected(cafe: Cafe){
    this.selectedCafe = cafe;
    this.selected = true;
  }

  getTotalOriginCoffee(){
    return this.cafes.filter((cafe) => cafe.tipo === 'Café de Origen').length;
  }

  getTotalBlendCoffee(){
    return this.cafes.filter((cafe) => cafe.tipo === 'Blend').length;
  }

  ngOnInit() {
    this.getCafes();
  }

}
