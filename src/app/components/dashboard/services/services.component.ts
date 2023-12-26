import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  activeService: any | null = null;
  public services = [
    {
      title: 'Web Development',
      description: 'Crafting beautiful and responsive websites tailored to your business needs.Nexiphor utilize the latest technologies to create engaging online experiences that captivate your audience.',
      icon: 'globe'
    },
    {
      title: 'Mobile App Development',
      description: 'Transforming ideas into powerful mobile applications for both iOS and Android platforms. Nexiphor brings innovation and functionality together to deliver seamless and feature-rich apps that stand out in the app stores.',
      icon: 'tablet'
    },
    {
      title: 'UI/UX Design',
      description: 'Bringing user-centered design to the forefront, Nexuphor creates interfaces that are not just visually appealing but also intuitive and user-friendly. Our designs ensure a smooth and delightful user experience.',
      icon: 'magic'
    },
    {
      title: 'Custom Software Solutions',
      description: 'Tailoring software solutions to address your specific business challenges.Our team of experts collaborates closely with you to develop customized software that streamlines processes and boosts efficiency.',
      icon: 'cogs'
    },
    {
      title: 'E-commerce Development',
      description: 'Building robust and scalable e-commerce platforms that empower your business to thrive in the digital marketplace. From product catalogs to secure payment gateways, we cover all aspects of online selling.',
      icon: 'shopping-cart'
    },
    {
      title: 'Cloud Computing Services',
      description: 'Unlock the power of the cloud with our cutting-edge solutions. We help you migrate, manage, and optimize your applications on cloud platforms, ensuring scalability, reliability, and cost-efficiency.',
      icon: 'cloud'
    },
    {
      title: 'Content Management System',
      description: 'At Nexiphor, we specialize in CMS solutions that empower you to effortlessly manage and enhance your online content. With user-friendly tools and expert support, we simplify your digital journey. Discover the power of effective content management with us today.',
      icon: 'handshake-o'
    },
    {
      title: 'SEO Optimization',
      description: 'At Nexiphor, we excel in SEO. Boost your online visibility, drive traffic, and maximize your presence with our expert SEO services. Let\'s elevate your digital strategy today!',
      icon: 'newspaper-o'
    },
    {
      title: 'Legacy System Modernization',
      description: 'Upgrade your outdated systems with our modernization expertise. Boost performance, reduce costs, and enhance security with our tailored solutions. Unlock the potential of your legacy systems for a more agile and efficient future. Nexiphor',
      icon: 'wpexplorer'
    }
  ];


  ngAfterViewInit(){
    const options = {
      root: null,
      rootMargin: '0px',
    };
    this.takeElements()
  }


  hoverEffect(service: any): void {
    if (window.matchMedia('(hover: none)').matches) {
      if (this.activeService !== service) {
        this.activeService = service;
      }
    }
  }

  takeElements(){
    const webDevelopmentService = document.querySelectorAll('.card-container').item(0)
    const mobileAppDevelopmentService = document.querySelectorAll('.card-container').item(1)
    const uxuiService = document.querySelectorAll('.card-container').item(2)
    const customSoftwareService = document.querySelectorAll('.card-container').item(3)
    const ecommerceDevelopmentService = document.querySelectorAll('.card-container').item(4)
    const cloudService = document.querySelectorAll('.card-container').item(5)
    const cmsService = document.querySelectorAll('.card-container').item(6)
    const seoService = document.querySelectorAll('.card-container').item(7)
    const systemModernization = document.querySelectorAll('.card-container').item(8)

    webDevelopmentService.classList.add('top-services-class')
    mobileAppDevelopmentService.classList.add('top-services-class')
    uxuiService.classList.add('top-services-class')

    customSoftwareService.classList.add('bottom-services-class')
    ecommerceDevelopmentService.classList.add('bottom-services-class')
    cloudService.classList.add('bottom-services-class')
    cmsService.classList.add('bottom-services-class')
    seoService.classList.add('bottom-services-class')
    systemModernization.classList.add('bottom-services-class')

    const observer: IntersectionObserver = new IntersectionObserver((entries: any) => {
      entries.forEach((entry: any) => {
        entry.target.classList.toggle('show',entry.isIntersecting)
      });
    },{
      threshold: 0.3,
    });

    observer.observe(webDevelopmentService)
    observer.observe(mobileAppDevelopmentService)
    observer.observe(uxuiService)
    observer.observe(customSoftwareService)
    observer.observe(ecommerceDevelopmentService)
    observer.observe(cloudService)
    observer.observe(cmsService)
    observer.observe(seoService)
    observer.observe(systemModernization)
  }

  closeCard(): void {
    this.activeService = null;
  }
}
