import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService, type TranslationKey } from '../../services/lang';

@Component({
  selector: 'app-stock-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './stock-book.html',
  styleUrls: ['./stock-book.css']
})
export class StockBook {
  @Output() closed = new EventEmitter<void>();

  referenceCode: string = '';
  reportCode: string = '';
  referenceDate: string = '';
  reportDate: string = '';

  constructor(public lang: LanguageService) { }

   print(): void {
  window.print();
}


  close(): void {
    this.closed.emit();    // Add close logic here
  }
}
