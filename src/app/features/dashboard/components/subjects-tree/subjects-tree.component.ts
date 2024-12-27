import { Component, Input } from '@angular/core';
import { Chapter } from '../../models/chapter';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subjects-tree',
  imports: [CommonModule],
  templateUrl: './subjects-tree.component.html',
  styleUrl: './subjects-tree.component.css'
})
export class SubjectsTreeComponent {
  @Input() chapters!: Chapter[]; 

}
