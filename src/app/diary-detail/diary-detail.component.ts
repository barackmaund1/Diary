import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Diary } from '../diary'

@Component({
  selector: 'app-diary-detail',
  templateUrl: './diary-detail.component.html',
  styleUrls: ['./diary-detail.component.css']
})
export class DiaryDetailComponent implements OnInit {
  @Input()diary:Diary
  @Output() isComplete=new EventEmitter<boolean>()
  
  diaryDelete(complete:boolean){
    this.isComplete.emit(complete)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
