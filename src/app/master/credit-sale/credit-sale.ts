import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/lang';

@Component({
  selector: 'app-credit-sale',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './credit-sale.html',
  styleUrls: ['./credit-sale.css']
})
export class CreditSaleComponent {
  @Output() closed = new EventEmitter<void>();

  constructor(public lang: LanguageService) {}

  godownCode = '001';
  godownName = 'दुकान';
  billDate = '21/03/2025';
  billNo = '1';
  memberCode = '00443';
  memberName = 'श्री मान्ने राजीव ...';
  accountBalance = '१२,२७०.०० नावे';

  godownList: any[] = [
    { code: '001', name: 'दुकान' },
    { code: '002', name: 'गोडाऊन A' },
    { code: '003', name: 'गोडाऊन B' }
  ];

  billNoList: any[] = [
    { no: '1', year: '2025' },
    { no: '2', year: '2025' },
    { no: '3', year: '2025' }
  ];

  memberList: any[] = [
    { code: '00443', name: 'श्री मान्ने राजीव ...' },
    { code: '00444', name: 'श्री पटेल राज कुमार' },
    { code: '00445', name: 'श्री शर्मा अनिल' }
  ];

  items = [
    { code: '00001', name: 'गहू (३० किलो पॅक)', qty: 5, rate: 1090.00, amount: 5450.00 },
    { code: '00005', name: 'तांदुळ - मध्यम मिनी दा १० किलो पॅक', qty: 2, rate: 600.00, amount: 1200.00 },
    { code: '00006', name: 'सूर्यफुल तेल (१५ किलो पॅक डबा)', qty: 2, rate: 2580.00, amount: 5160.00 },
    { code: '00008', name: 'मुगडाळ (२ किलो पॅक)', qty: 2, rate: 230.00, amount: 460.00 }
  ];

  get totalAmount() {
    return this.items.reduce((acc, item) => acc + item.amount, 0);
  }

  onGodownChange() {
    const selected = this.godownList.find(g => g.code === this.godownCode);
    if (selected) {
      this.godownName = selected.name;
    }
  }

  onBillNoChange() {
    // Bill No change logic if needed
    console.log('Bill No changed:', this.billNo);
  }

  onMemberChange() {
    const selected = this.memberList.find(m => m.code === this.memberCode);
    if (selected) {
      this.memberName = selected.name;
    }
  }

  onSave() {
    console.log('Save credit sale');
  }

  onCancel() {
    console.log('Cancel credit sale');
  }

  onClose() {
    this.closed.emit();
  }

  onNew() {
    console.log('New credit sale');
  }

  onEdit() {
    console.log('Edit credit sale');
  }

  onDelete() {
    console.log('Delete credit sale');
  }

  onPrint() {
    console.log('Printing credit sale...');
    window.print();
  }
}