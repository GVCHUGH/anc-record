import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddAncComponent } from 'src/app/shared/component/add-anc/add-anc.component';

@Component({
  selector: 'app-all-anc',
  templateUrl: './all-anc.component.html',
  styleUrls: ['./all-anc.component.scss']
})
export class AllAncComponent {

  constructor(
    private dialog : MatDialog
  ){}

  addAnc(){
    this.dialog.open(AddAncComponent)
  }
}
