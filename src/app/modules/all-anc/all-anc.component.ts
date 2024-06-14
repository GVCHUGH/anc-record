import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map } from 'rxjs';
import { AddAncComponent } from 'src/app/shared/component/add-anc/add-anc.component';

@Component({
  selector: 'app-all-anc',
  templateUrl: './all-anc.component.html',
  styleUrls: ['./all-anc.component.scss']
})
export class AllAncComponent {

  constructor(
    private dialog : MatDialog,
    private http : HttpClient,
  ){
    this.getAncData();
  }

  ancList : any[] = [];

  getAncData(){
    this.http.get<any>('https://anc-record-default-rtdb.firebaseio.com/anc.json')
    .pipe(map((response:any) =>{
      let tasks = [];
      for(let key in response){
        if(response.hasOwnProperty(key)){
          tasks.push({...response[key], id: key});
        }
      }
      return tasks;
    }))
    .subscribe((res:any) => {
      this.ancList = res;
    })
  }

  addAnc(){
    this.dialog.open(AddAncComponent)
  }
}
