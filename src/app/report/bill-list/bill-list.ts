import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/lang';

@Component({
  selector: 'app-bill-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bill-list.html',
  styleUrls: ['./bill-list.css']
})
export class BillList {

  /* Form model fields */
  balanceDate: string = '';
  accountType: string = '';

  @Output() closed = new EventEmitter<void>();

  constructor(public lang: LanguageService) {}

   print(): void {
  window.print();
}


  close(): void {
    this.closed.emit(); // notify parent to hide component
  }
}
