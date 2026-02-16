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

  // =====================
  // HEADER FIELDS
  // =====================
  godownCode = '001';
  godownName = 'मुख्य गोडाऊन';

  billNo = '1';
  billDate = '';

  farmerName = '';
  memberCode = '';

  // =====================
  // TABLE DATA
  // =====================
  items = [
    { code: '00001', name: 'गहू (३० किलो पॅक)', qty: 10, rate: 2500, amount: 25000 }
  ];

  totalAmount = 0;

  ngOnInit() {
    this.calculateTotal();
  }

  // =====================
  // CALCULATIONS
  // =====================
  calculateTotal() {
    this.totalAmount = this.items.reduce((sum, item) => {
      item.amount = Number(item.qty || 0) * Number(item.rate || 0);
      return sum + item.amount;
    }, 0);
  }

  // =====================
  // ACTION BUTTONS
  // =====================

  onNew() {
    this.billNo = '';
    this.billDate = '';
    this.farmerName = '';
    this.memberCode = '';

    this.items.forEach(item => {
      item.qty = 0;
      item.rate = 0;
      item.amount = 0;
    });

    this.calculateTotal();
  }

  onEdit() {
    console.log('Editing Grain Inward...');
  }

  onDelete() {
    if (confirm('ही नोंद रद्द करायची आहे का?')) {
      this.onNew();
      console.log('Grain Inward Deleted');
    }
  }

  onPrint() {
    window.print();
  }

  onSave() {
    console.log('Saving Grain Inward...', {
      header: {
        godownCode: this.godownCode,
        billNo: this.billNo,
        billDate: this.billDate,
        farmerName: this.farmerName,
        memberCode: this.memberCode
      },
      items: this.items,
      totalAmount: this.totalAmount
    });
  }

  onClose() {
    this.closed.emit();
  }
}
