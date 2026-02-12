import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-stock-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './stock-register.html',
  styleUrls: ['./stock-register.scss']
})
export class StockRegisterComponent {

  /* =========================
     FORM FIELDS
     ========================= */
  startCode: string = '00006';
  endCode: string = '00006';
  date: string = '05/02/2026';

  /* =========================
     OUTPUT EVENTS
     ========================= */
  @Output() closed = new EventEmitter<void>();

  /* =========================
     ACTIONS
     ========================= */

  print(): void {
    console.log('Stock Register Print', {
      startCode: this.startCode,
      endCode: this.endCode,
      date: this.date
    });

    // 👉 You can add window.print() or API call here
    // window.print();
  }

  close(): void {
    this.closed.emit();
  }
}
