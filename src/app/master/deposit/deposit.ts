import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/lang';

@Component({
  selector: 'app-deposit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './deposit.html',
  styleUrls: ['./deposit.css']
})
export class DepositComponent {
  @Output() closed = new EventEmitter<void>();

  constructor(public lang: LanguageService) {}

  form = {
    type: 'cash',
    transactionNo: '1',
    date: '2026-02-12',
    partyCode: '',
    partyName: '',
    receivedFrom: '',
    amount: 0,
    totalAmount: 0,
    remarks: ''
  };

  transactionTypes = [
    { value: 'cash', labelMr: 'रोख जमा', labelEn: 'Cash Deposit' },
    { value: 'bank', labelMr: 'बँक जमा', labelEn: 'Bank Deposit' }
  ];

  parties = [
    { code: 'P001', name: 'अमोल पाटील' },
    { code: 'P002', name: 'राजेश देशमुख' }
  ];

  onPartyChange(code: string) {
    const selected = this.parties.find(p => p.code === code);
    this.form.partyName = selected?.name || '';
  }

  onAmountChange() {
    this.form.totalAmount = Number(this.form.amount || 0);
  }

  onNew() {
    this.form.amount = 0;
    this.form.totalAmount = 0;
    this.form.remarks = '';
  }

  onEdit() {
    console.log('Edit deposit');
  }

  onDelete() {
    if (confirm('क्या आप इस डिपोजिट को हटाना चाहते हैं?')) {
      console.log('Deposit deleted');
      this.onNew();
    }
  }

  onPrint() {
    console.log('Printing deposit...');
    window.print();
  }

  onClose() {
    this.closed.emit();
  }
}
