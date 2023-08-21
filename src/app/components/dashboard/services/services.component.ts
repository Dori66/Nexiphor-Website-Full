import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  public services = [
    {
      title: 'Web Development',
      description: 'Crafting beautiful and responsive websites tailored to your business needs. Our expert developers utilize the latest technologies to create engaging online experiences that captivate your audience.',
      icon: 'globe'
    },
    {
      title: 'Mobile App Development',
      description: 'Transforming ideas into powerful mobile applications for both iOS and Android platforms. We bring innovation and functionality together to deliver seamless and feature-rich apps that stand out in the app stores.',
      icon: 'tablet'
    },
    {
      title: 'UI/UX Design',
      description: 'Bringing user-centered design to the forefront, we create interfaces that are not just visually appealing but also intuitive and user-friendly. Our designs ensure a smooth and delightful user experience.',
      icon: 'magic'
    },
    {
      title: 'Custom Software Solutions',
      description: 'Tailoring software solutions to address your specific business challenges. Our team of experts collaborates closely with you to develop customized software that streamlines processes and boosts efficiency.',
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
    }
  ];

}
