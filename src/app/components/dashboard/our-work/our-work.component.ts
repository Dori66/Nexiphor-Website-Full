import { Component } from '@angular/core';


@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.scss']
})
export class OurWorkComponent {
  workTypes: string[] = ['Websites', 'Applications', 'Designs'];
  products: { name: string, images: { image: string, thumbImage: string }[], }[] = [
    {
      name: 'Gluecksmomente',
      images: [
        { image: '../../../../assets/websites/gluecksmomente/1.png', thumbImage: '../../../../assets/websites/gluecksmomente/1.png' },
        { image: '../../../../assets/websites/gluecksmomente/2.png', thumbImage: '../../../../assets/websites/gluecksmomente/2.png' },
        { image: '../../../../assets/websites/gluecksmomente/3.png', thumbImage: '../../../../assets/websites/gluecksmomente/3.png' },
        { image: '../../../../assets/websites/gluecksmomente/4.png', thumbImage: '../../../../assets/websites/gluecksmomente/4.png' },
      ]
    },
    {
      name: 'Route 66',
      images: [
        { image: '../../../../assets/websites/route66/a.png', thumbImage: '../../../../assets/websites/route66/a.png' },
        { image: '../../../../assets/websites/route66/b.png', thumbImage: '../../../../assets/websites/route66/b.png' },
        { image: '../../../../assets/websites/route66/c.png', thumbImage: '../../../../assets/websites/route66/c.png' }
      ]
    }
  ];
}