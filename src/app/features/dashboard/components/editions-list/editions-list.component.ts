import { Component, Input } from '@angular/core';
import { Edition } from '../../models/edition';
import { EditionItemComponent } from '../edition-item/edition-item.component';

@Component({
  selector: 'app-editions-list',
  imports: [EditionItemComponent],
  templateUrl: './editions-list.component.html',
  styleUrl: './editions-list.component.css'
})
export class EditionsListComponent {
  @Input() editions!: Edition[];


}
