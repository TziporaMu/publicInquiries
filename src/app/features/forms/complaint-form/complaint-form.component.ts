import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseForm } from 'src/app/shared/models/base-form';

@Component({
  selector: 'app-complaint-form',
  templateUrl: './complaint-form.component.html',
  styleUrls: ['./complaint-form.component.scss']
})


    export class ComplaintFormComponent extends BaseForm {
      
      // Marking 'form' property as 'override' since it's inherited from BaseForm
      override form!: FormGroup;
    
      constructor( fb: FormBuilder) {
        super(fb);  // Call the constructor of BaseForm
      }
    
      ngOnInit(): void {
        // Initialize the form with fields specific to this form
        this.initForm({
          title: [''],
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          mobilePhone: [''],
          email: ['', [Validators.required, Validators.email]],
        });
      }
    }
    