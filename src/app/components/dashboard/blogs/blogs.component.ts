import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent {



  ngAfterViewInit(){
    const options = {
      root: null,
      rootMargin: '0px',
    };
    const blogs = document.querySelectorAll('.col')


    const observer: IntersectionObserver = new IntersectionObserver((entries: any) => {
      entries.forEach((entry: any) => {
        entry.target.classList.toggle('show',entry.isIntersecting)
      });
    },{
      threshold: 0.3
    });
    blogs.forEach(blog => {
      observer.observe(blog)
    })
  }
}
