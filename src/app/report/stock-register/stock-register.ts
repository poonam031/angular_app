import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/lang';

@Component({
  selector: 'app-stock-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './stock-register.html',
  styleUrls: ['./stock-register.scss']
})
export class StockRegisterComponent {

  startCode = '00006';
  endCode = '00006';
  date = '2026-02-05';

  @Output() closed = new EventEmitter<void>();

  constructor(public lang: LanguageService) {}

  print(): void {
    console.log('Stock Register Print', {
      startCode: this.startCode,
      endCode: this.endCode,
      date: this.date
    });
  }

  close(): void {
    this.closed.emit();
  }
}
