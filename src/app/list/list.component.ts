import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  items: string[] = [];
  newItem: string = '';

  addItem(): void {
    if (this.newItem.trim() !== '') {
      this.items.push(this.newItem);
      this.newItem = ''; // Clear the input field after adding
    }
  }
}
