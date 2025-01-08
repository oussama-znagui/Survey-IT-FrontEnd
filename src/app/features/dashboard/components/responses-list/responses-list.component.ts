import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from '../../../models/question';
import { ResponseItemComponent } from '../response-item/response-item.component';
import { AddResponseComponent } from '../add-response/add-response.component';

@Component({
  selector: 'app-responses-list',
  imports: [ResponseItemComponent,AddResponseComponent],
  templateUrl: './responses-list.component.html',
  styleUrl: './responses-list.component.css'
})
export class ResponsesListComponent {
  @Input() question!: Question;
  @Output() backClick = new EventEmitter<void>();

  ngOnInit(){
    console.log("from answer", this.question)
  }

  onBack() {
    this.backClick.emit();
  }

}
