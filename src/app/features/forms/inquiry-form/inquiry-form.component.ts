import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InquiryService } from '../inquiry.service';

@Component({
  selector: 'app-inquiry-form',
  templateUrl: './inquiry-form.component.html',
  styleUrls: ['./inquiry-form.component.scss']
})
export class InquiryFormComponent implements OnInit {
  form: FormGroup;
  inquiries: any[] = [];
  selectedInquiry: any = null;

  constructor(private fb: FormBuilder, private inquiryService: InquiryService) {
    this.form = this.fb.group({
      complaintType: ['request', Validators.required],  // Default value 'request'
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      idNumber: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      complaintDescription: ['', Validators.required],
      caseNumber: [''],
      court: [''],
      file: [null]  // For handling file upload
    });
  }

  ngOnInit(): void {
    this.loadInquiries();
  }

  // Create or Update inquiry
  onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value;
      
      // Prepare form data for file upload
      const formDataToSend = new FormData();
      formDataToSend.append('complaintType', formData.complaintType);
      formDataToSend.append('firstName', formData.firstName);
      formDataToSend.append('lastName', formData.lastName);
      formDataToSend.append('idNumber', formData.idNumber);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('address', formData.address);
      formDataToSend.append('complaintDescription', formData.complaintDescription);
      formDataToSend.append('caseNumber', formData.caseNumber);
      formDataToSend.append('court', formData.court);

      if (formData.file) {
        formDataToSend.append('file', formData.file, formData.file.name);
      }

      if (formData.id) {
        // Update existing inquiry
        this.inquiryService.updateInquiry(formData.id, formDataToSend).subscribe(() => {
          this.loadInquiries();
          this.resetForm();
        });
      } else {
        // Create new inquiry
        this.inquiryService.createInquiry(formDataToSend).subscribe(() => {
          this.loadInquiries();
          this.resetForm();
        });
      }
    }
  }

  // Load all inquiries
  loadInquiries() {
    this.inquiryService.getAllInquiries().subscribe((data) => {
      this.inquiries = data;
    });
  }

  // Edit inquiry
  onEdit(inquiry: any) {
    this.form.patchValue(inquiry);
  }

  // Delete inquiry
  onDelete(id: number) {
    if (confirm('Are you sure you want to delete this inquiry?')) {
      this.inquiryService.deleteInquiry(id).subscribe(() => {
        this.loadInquiries();
      });
    }
  }

  // Reset form
  resetForm() {
    this.form.reset();
  }

  // File input handler (for file upload)
  onFileChange(event: any) {
    const file = event.target.files[0];
    this.form.patchValue({
      file: file
    });
  }
}
