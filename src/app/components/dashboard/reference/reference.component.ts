import { Component } from '@angular/core';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss']
})
export class ReferenceComponent {


  // ngAfterViewInit(){
  //   const options = {
  //     root: null,
  //     rootMargin: '0px',
  //   };
  //   const references = document.querySelectorAll('.reference-message')
  //
  //
  //   const observer: IntersectionObserver = new IntersectionObserver((entries: any) => {
  //     entries.forEach((entry: any) => {
  //       entry.target.classList.toggle('show',entry.isIntersecting)
  //     });
  //   },{
  //     threshold: 0.3,
  //   });
  //   references.forEach(reference => {
  //     observer.observe(reference)
  //   })
  // }

}
