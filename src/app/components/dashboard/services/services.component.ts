import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
    {
      title: 'Web Development',
      description: 'We create beautiful and responsive websites.',
      icon: 'book'
    },
    {
      title: 'Mobile App Development',
      description: 'Build powerful mobile applications for iOS and Android.',
      icon: 'pen'
    },
    {
      title: 'UI/UX Design',
      description: 'Design user-friendly and engaging interfaces.',
      icon: 'trash'
    }
  ];
}
