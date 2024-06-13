import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { AllAncComponent } from './modules/all-anc/all-anc.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'all-anc', component: AllAncComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
