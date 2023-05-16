import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CafeComponent } from './cafe.component';
import { CafeDetailComponent } from './cafe-detail/cafe-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CafeComponent,CafeDetailComponent],
  exports: [CafeComponent]
})
export class CafeModule { }
