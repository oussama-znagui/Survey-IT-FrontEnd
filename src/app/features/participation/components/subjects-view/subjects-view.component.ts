import { Component, Input } from '@angular/core';
import { Chapter } from '../../../models/chapter';

@Component({
  selector: 'app-subjects-view',
  imports: [],
  templateUrl: './subjects-view.component.html',
  styleUrl: './subjects-view.component.css'
})
export class SubjectsViewComponent {
  @Input() chapters!: Chapter[];

}
