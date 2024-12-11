import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ComplaintFormComponent } from './complaint-form/complaint-form.component';
import { FormsRoutingModule } from './forms-routing.module';
import { InquiryFormComponent } from './inquiry-form/inquiry-form.component';



@NgModule({
  declarations: [
    ComplaintFormComponent,
    InquiryFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsRoutingModule
  ]
})
export class FormsModule { }
