import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  selectedSites: any[] = [];
  selectedBudget: any;
  contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private emailService: EmailService) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      interests: ['']
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.contactForm.get('interests')?.setValue(this.selectedSites);
      this.emailService.sendEmail(this.contactForm.value).subscribe(
        response => {
          console.log('Email sent successfully', response);
        },
        error => {
          console.error('Error sending email', error);
        }
      );
    } else {
      Object.keys(this.contactForm.controls).forEach((key: string) => {
        const control = this.contactForm.controls[key];
        control.markAsTouched();
        control.markAsDirty();
        control.updateValueAndValidity();
      });
    }
  }

  ngOnInit(): void {
  }

  addSite(site: any) {
    let find = this.selectedSites.findIndex((item: any) => item == site);
    if (find >= 0) {
      this.selectedSites?.splice(find, 1);
    } else {
      this.selectedSites.push(site);
    }
  }

  uploadFile(file: any) {
    console.log(file.value)
  }
}
