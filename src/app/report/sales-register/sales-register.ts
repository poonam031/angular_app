import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/lang';

@Component({
  selector: 'app-sales-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sales-register.html',
  styleUrls: ['./sales-register.css']
})
export class SalesRegister {

  @Output() closed = new EventEmitter<void>();

  startDate: string = '';
  endDate: string = '';
  saleType: string = 'cash';

  constructor(public lang: LanguageService) {}

  print(): void {
    console.log('Sales Register Print triggered');
  }

  close(): void {
    this.closed.emit();  // emits event to parent
  }
}


