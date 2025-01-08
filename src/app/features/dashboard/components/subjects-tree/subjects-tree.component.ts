import { Component, EventEmitter, inject, Input, Output } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Chapter } from '../../../models/chapter';
import { EditionDetailsComponent } from '../edition-details/edition-details.component';

@Component({
  selector: 'app-subjects-tree',
  imports: [CommonModule],
  templateUrl: './subjects-tree.component.html',
  styleUrl: './subjects-tree.component.css'
})
export class SubjectsTreeComponent {
  @Input() chapters!: Chapter[]; 
  @Output() chapterToSend:  EventEmitter<Chapter> = new EventEmitter();
  @Output() chapterID?: number;
  
  private parent = inject(EditionDetailsComponent);

  sendChapter(chapter: Chapter){
    this.chapterID = chapter.id;
    this.chapterToSend.emit(chapter);
    console.log('heeeey : ', chapter);
    this.parent.updateDataFromChild1(chapter)
    this.parent.a = chapter.id

  }

}
