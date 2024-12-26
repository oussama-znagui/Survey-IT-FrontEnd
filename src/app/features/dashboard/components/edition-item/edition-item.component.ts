import { Component, Input } from '@angular/core';
import { Edition } from '../../models/edition';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-edition-item',
  imports: [CommonModule, RouterModule],
  templateUrl: './edition-item.component.html',
  styleUrl: './edition-item.component.css'
})
export class EditionItemComponent {
  @Input() edition!: Edition;



}
