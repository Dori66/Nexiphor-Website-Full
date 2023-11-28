import { Component, OnInit } from '@angular/core';
import { EmailService } from './services/email.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private emailService: EmailService, private meta: Meta) { }
  title = 'Nexiphor';
  ngOnInit(): void {
    this.emailService.warmUpServer().subscribe(() => {
    });
    this.meta.updateTag({ name: 'description', content: 'Nexiphor is your trusted partner for web development, website design, and mobile app development. Our team of experts creates SEO-optimized, user-friendly web sites and mobile apps that drive online success.' });
  }
}
