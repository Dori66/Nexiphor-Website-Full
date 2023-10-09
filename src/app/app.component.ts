import { Component, OnInit } from '@angular/core';
import { EmailService } from './services/email.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private emailService: EmailService) { }
  title = 'Nexiphor';
  ngOnInit(): void {
    this.emailService.warmUpServer().subscribe(response => {
      console.log('Server is warmed up:', response);
    });
  }
}
