import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { map } from 'rxjs';

@Component({
  selector: 'app-add-anc',
  templateUrl: './add-anc.component.html',
  styleUrls: ['./add-anc.component.scss']
})
export class AddAncComponent {

  ancForm! : FormGroup;
  isEdit:string = '';

  ngOnInit(){
    this.ancForm = new FormGroup({
      'id' : new FormControl(null),
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
    private http : HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){
    
    this.isEdit = data?.id;
    this.getEditData(this.isEdit);
  }

  addANC(){
    if(this.isEdit){
      this.http.put('https://anc-record-default-rtdb.firebaseio.com/anc/'+this.isEdit+'.json', this.ancForm.value).subscribe((res:any) => {
          if(res){
              this.dialogRef.close();
          }
      })
    } else {
        this.http.post('https://anc-record-default-rtdb.firebaseio.com/anc.json', this.ancForm.value).subscribe((res:any) => {
            if(res){
                this.dialogRef.close();
            }
        })
    }
  }

  getEditData(id:any){
    this.http.get('https://anc-record-default-rtdb.firebaseio.com/anc/' +id+ '.json')
    .subscribe((res:any) => {
      this.ancForm = new FormGroup({
        'id': new FormControl(id),
        'PCTS_No' : new FormControl(res?.PCTS_No, [Validators.required, Validators.maxLength(16), Validators.minLength(16)]),
        'name' : new FormControl(res?.name, Validators.required),
        'husband_name' : new FormControl(res?.husband_name, Validators.required),
        'lmp_date' : new FormControl(res?.lmp_date, Validators.required),
        'phone_no' : new FormControl(res?.phone_no, [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
        'aadhar_no' : new FormControl(res?.aadhar_no, [Validators.required, Validators.maxLength(12), Validators.minLength(12)]),
        'account_no' : new FormControl(res?.account_no),
        'first_anc' : new FormControl(res?.first_anc),
        'first_hb' : new FormControl(res?.first_hb),
        'first_weight' : new FormControl(res?.first_weight),
        'second_anc' : new FormControl(res?.second_anc),
        'second_hb' : new FormControl(res?.second_hb),
        'second_weight' : new FormControl(res?.second_weight),
        'third_anc' : new FormControl(res?.third_anc),
        'third_hb' : new FormControl(res?.third_hb),
        'third_weight' : new FormControl(res?.third_weight),
        'forth_anc' : new FormControl(res?.forth_anc),
        'forth_hb' : new FormControl(res?.forth_hb),
        'forth_weight' : new FormControl(res?.forth_weight),
      })
    })
  }

  toClose(){
    this.dialogRef.close();
  }
}
