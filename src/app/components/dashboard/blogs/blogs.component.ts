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
    const thirdBlog = document.querySelectorAll('.col-right')
    const firstBlog = document.querySelectorAll('.col-left')
    const secondBlog = document.querySelectorAll('.col-middle')


    const observer: IntersectionObserver = new IntersectionObserver((entries: any) => {
      entries.forEach((entry: any) => {
        entry.target.classList.toggle('show',entry.isIntersecting)
      });
    },{
      threshold: 0.3,
    });
    thirdBlog.forEach(thirdBlog => {
      observer.observe(thirdBlog)
    })
    firstBlog.forEach(firstBlog => {
      observer.observe(firstBlog)
    })
    secondBlog.forEach(secondBlog => {
      observer.observe(secondBlog)
    })
  }
}
