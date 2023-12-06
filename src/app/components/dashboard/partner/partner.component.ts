import { Component } from '@angular/core';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss']
})
export class PartnerComponent {


  ngAfterViewInit(){
    const options = {
      root: null,
      rootMargin: '0px',
    };
    const partnerParent = document.querySelectorAll('.row')
    const benefit = document.querySelectorAll('.benefit')


    const observer: IntersectionObserver = new IntersectionObserver((entries: any) => {
      entries.forEach((entry: any) => {
        entry.target.classList.toggle('show',entry.isIntersecting)
      });
    },{
      threshold: 0.1,
    });
    partnerParent.forEach(partnerParent => {
      observer.observe(partnerParent)
    })
    benefit.forEach(benefit => {
      observer.observe(benefit)
    })
  }

}
