import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';

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
  @ViewChild('services', { static: true }) services?: ElementRef;
  @ViewChild('home', { static: true }) home?: ElementRef;
  @ViewChild('contact', { static: true }) contact?: ElementRef;


  openedMenu: boolean = false;
  selectedMenuOption: string = 'home';

  direction: string = ''


  scrollTo(direction: string) {
    if (direction == 'home'){
      this.direction = direction

      this.home?.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }else if (direction == 'services'){
      this.direction = direction

      this.services?.nativeElement.scrollIntoView({ behavior: 'smooth' });

    }else if (direction == 'contact'){
      this.direction = direction

      this.contact?.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  updateOpacityOnScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    this.opacityValue = 1 - scrollY / 300;
    this.opacityValue = Math.max(0, this.opacityValue);
  }

  menuSelect(direction: string){
    this.selectedMenuOption = direction;
    this.scrollTo(direction)
  }

}
