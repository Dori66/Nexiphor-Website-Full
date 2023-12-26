import { FormBuilder, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  selectedSites: any[] = [];
  contactForm: FormGroup;
  submited: boolean = false;
  submitedSuccessful: boolean = false;
  constructor(private formBuilder: FormBuilder, private emailService: EmailService) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['',],
      interests: ['']
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.submited = true;
      this.contactForm.get('interests')?.setValue(this.selectedSites);
      this.emailService.sendEmail(this.contactForm.value).subscribe(
        () => {
          this.contactForm.reset();
          this.submited = false;
          this.submitedSuccessful = true;
        },
        () => {
          this.contactForm.reset();
          this.submited = false;
          this.submitedSuccessful = true;
          setTimeout(() => {
            this.submitedSuccessful = false;
          }, 1500);
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
