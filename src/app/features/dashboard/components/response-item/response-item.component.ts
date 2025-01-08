import { Component, Input } from '@angular/core';
import { Answer } from '../../../models/response';

@Component({
  selector: 'app-response-item',
  imports: [],
  templateUrl: './response-item.component.html',
  styleUrl: './response-item.component.css'
})
export class ResponseItemComponent {
  @Input() answer!: Answer;


  onDeleteResponse(id: number) {
    console.log('Delete response:', id);
  }

}
