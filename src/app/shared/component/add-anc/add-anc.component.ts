import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-anc',
  templateUrl: './add-anc.component.html',
  styleUrls: ['./add-anc.component.scss']
})
export class AddAncComponent {

  ancForm! : FormGroup;

  ngOnInit(){
    this.ancForm = new FormGroup({
      'PCTS_No' : new FormControl(null, [Validators.required, Validators.maxLength(16), Validators.minLength(16)]),
      'name' : new FormControl(null, Validators.required),
      'husband_name' : new FormControl(null, Validators.required),
      'lmp_date' : new FormControl(null, Validators.required),
      'phone_no' : new FormControl(null, [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
      'aadhar_no' : new FormControl(null, [Validators.required, Validators.maxLength(12), Validators.minLength(12)]),
      'account_no' : new FormControl(null),
      'first_anc' : new FormControl(null),
      'first_hb' : new FormControl(null),
      'first_weight' : new FormControl(null),
      'second_anc' : new FormControl(null),
      'second_hb' : new FormControl(null),
      'second_weight' : new FormControl(null),
      'third_anc' : new FormControl(null),
      'third_hb' : new FormControl(null),
      'third_weight' : new FormControl(null),
      'forth_anc' : new FormControl(null),
      'forth_hb' : new FormControl(null),
      'forth_weight' : new FormControl(null),
    })
  }
  
  constructor (
    private dialogRef : MatDialogRef<AddAncComponent>,
    private http : HttpClient
  ){}

  addANC(){
    this.http.post('https://anc-record-default-rtdb.firebaseio.com/anc.json', this.ancForm.value).subscribe((res:any) => {
      if(res){
        this.dialogRef.close();
      }
    })
  }

  toClose(){
    this.dialogRef.close();
  }
}
