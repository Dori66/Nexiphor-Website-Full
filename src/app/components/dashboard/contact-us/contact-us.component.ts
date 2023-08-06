import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  selectedSites : any[]= [];
  selectedBudget:any;


  addSite(site:any){
    let find = this.selectedSites.findIndex((item: any) => item == site);
    if (find >= 0){
      this.selectedSites?.splice(find,1);
    }else{
      this.selectedSites.push(site);
    }
  }
  chooseBudget(budget: any){
    this.selectedBudget = budget;
  }
  uploadFile(file: any){
    console.log(file.value)
  }

}
