import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @HostListener('window:scroll', [])
  onScroll(): void {
    this.updateOpacityOnScroll();
  }

  opacityValue = 1;
  @ViewChild('services', { static: false }) services?: ElementRef;
  @ViewChild('home', { static: true }) home?: ElementRef;
  @ViewChild('contact', { static: true }) contact?: ElementRef;
  @ViewChild('ourwork', { static: true }) ourwork?: ElementRef;

  ngAfterViewInit(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const serviceCallBack: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.selectedMenuOption = 'services'
          // You can perform any Angular-specific actions here
        }
      });
    };
    const observer = new IntersectionObserver(serviceCallBack, options);
    observer.observe(this.services!.nativeElement);



    const contactCallBack: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.selectedMenuOption = 'contact'
        }
      });
    };
    const observer2 = new IntersectionObserver(contactCallBack, options);
    observer2.observe(this.contact!.nativeElement);

    const homeCallBack: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.selectedMenuOption = 'home'
        }
      });
    };
    const observer3 = new IntersectionObserver(homeCallBack, options);
    observer3.observe(this.home!.nativeElement);


  }



  openedMenu: boolean = false;
  selectedMenuOption: string = 'home';

  direction: string = ''


  scrollTo(direction: string) {
    if (direction == 'home') {
      this.direction = direction

      this.home?.nativeElement.scrollIntoView({ behavior: 'smooth' });
    } else if (direction == 'services') {
      this.direction = direction

      this.services?.nativeElement.scrollIntoView({ behavior: 'smooth' });

    } else if (direction == 'contact') {
      this.direction = direction

      this.contact?.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  updateOpacityOnScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    this.opacityValue = 1 - scrollY / 300;
    this.opacityValue = Math.max(0, this.opacityValue);
  }

  menuSelect(direction: string) {
    this.selectedMenuOption = direction;
    this.scrollTo(direction)
  }

}
