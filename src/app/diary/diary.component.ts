import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary'
@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
  
  diaries:Diary[]=[
    new Diary(1,'Goal','studying programming and coding skills',new Date(2020,4,23)),
    new Diary(2,'Activities','Exercise more often,do laundry more reguraly',new Date(2022,5,25)),
    new Diary(3,'Leisure','Learning knit and reading news online',new Date(2021,4,19)),
    new Diary(4,'Surrounding Event','Visiting the sick and orphans around their home',new Date(2020,6,7)),
    new Diary(4,'Preaching the Gospel','Holding a mega healing service in Nairobi',new Date(2020,12,20)),
  ];

  addNewDiary(diary){
    let diaryLength=this.diaries.length;
    diary.id=diaryLength+1;
    diary.completeDate=new Date(diary.completeDate);
    this.diaries.push(diary)

  }
  toggleDetails(index){
    this.diaries[index].showDescription=!this.diaries[index].showDescription
  }
  completeDiary(isComplete,index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.diaries[index].name}?`)

      if (toDelete){
        this.diaries.splice(index,1)
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
