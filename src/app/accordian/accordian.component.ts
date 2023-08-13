import { Component, OnInit } from '@angular/core';
import { SectionDetails } from '../shared/model/data.model';
import { SectionService } from '../shared/service/section.service';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent implements OnInit{
  sectionData : SectionDetails[] = [];
  constructor(private sectionServe : SectionService){}
  ngOnInit(): void {
    this.sectionServe.sectionSub.subscribe((param : any)=>{
      this.sectionData = param;
      console.log(this.sectionData)
    })
  }
}
