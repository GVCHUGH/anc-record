import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { AddAncComponent } from './component/add-anc/add-anc.component';
import { AddHbncComponent } from './component/add-hbnc/add-hbnc.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddAncComponent,
    AddHbncComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
