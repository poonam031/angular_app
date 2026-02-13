import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/lang';   // ✅ adjust path if needed
import { ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-outstanding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './outstanding.html',
  styleUrls: ['./outstanding.scss'],
  encapsulation: ViewEncapsulation.None

})
export class OutstandingComponent {

  constructor(public lang: LanguageService) {}   // ✅ inject service

  fromDate = '';
  toDate = '';
  location = '';

  @Output() closed = new EventEmitter<void>();

  search() {
    console.log({
      fromDate: this.fromDate,
      toDate: this.toDate,
      location: this.location
    });
  }

  clear() {
    this.fromDate = '';
    this.toDate = '';
    this.location = '';
  }

  close() {
    this.closed.emit();
  }
}
