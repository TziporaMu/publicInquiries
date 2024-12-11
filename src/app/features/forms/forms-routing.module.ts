import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComplaintFormComponent } from './complaint-form/complaint-form.component';
import { InquiryFormComponent } from './inquiry-form/inquiry-form.component';

const routes: Routes = [
  { path: '', component: InquiryFormComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsRoutingModule { }
