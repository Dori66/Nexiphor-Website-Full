import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  selectedSites : any[]= [];
  selectedBudget:any;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  addSite(site:any){
    let find = this.selectedSites.findIndex((item: any) => item == site);
    if (find >= 0){
      this.selectedSites?.splice(find,1);
    }else{
      this.selectedSites.push(site);
    }
  }
  uploadFile(file: any){
    console.log(file.value)
  }

}
