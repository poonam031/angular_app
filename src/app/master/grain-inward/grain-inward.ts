import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/lang';

@Component({
  selector: 'app-grain-inward',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './grain-inward.html',
  styleUrls: ['./grain-inward.css']
})
export class GrainInwardComponent implements OnInit {

  @Output() closed = new EventEmitter<void>();

  constructor(public lang: LanguageService) {}

  // Header Fields
  godownCode = '001';
  godownName = 'मुख्य गोडाऊन';

  billNo = '1';
  billDate = '';

  farmerName = '';
  memberCode = '';

  // Table Data
  items = [
    { code: '00001', name: 'गहू (३० किलो पॅक)', qty: 10, rate: 2500, amount: 25000 }
  ];

  totalAmount = 0;

  ngOnInit() {
    this.calculateTotal();
  }

  calculateTotal() {
    this.totalAmount = this.items.reduce((sum, item) => {
      item.amount = item.qty * item.rate;
      return sum + item.amount;
    }, 0);
  }

  onClose() {
    this.closed.emit();
  }

  onSave() {
    console.log('Saving Grain Inward...', this.items);
  }
}