import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-anc',
  templateUrl: './add-anc.component.html',
  styleUrls: ['./add-anc.component.scss']
})
export class AddAncComponent {

  ancForm! : FormGroup;
  
  constructor (
    private dialogRef : MatDialogRef<AddAncComponent>
  ){}

  addANC(){}

  toClose(){
    this.dialogRef.close();
  }
}
