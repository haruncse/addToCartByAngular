import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownListsComponent } from './drop-down-lists/drop-down-lists.component';



@NgModule({
  declarations: [DropDownListsComponent],
  imports: [
    CommonModule
  ],
  exports:[
    DropDownListsComponent
  ]
})
export class DropDownListModule { }
