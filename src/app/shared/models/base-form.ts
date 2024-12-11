import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class BaseForm {
  form!: FormGroup;
  protected fb: FormBuilder;  // Make fb protected

  constructor(fb: FormBuilder) {
    this.fb = fb;  // Initialize fb
  }

  // Common form initialization logic
  initForm(fields: { [key: string]: any }) {
    this.form = this.fb.group(fields);
  }

  // Common validation
  isValid(): boolean {
    return this.form.valid;
  }

  // Common submit handler
  onSubmit(): void {
    if (this.isValid()) {
      console.log(this.form.value);
      alert('Form Submitted Successfully!');
    } else {
      alert('Form is invalid. Please fill all required fields.');
    }
  }
}
