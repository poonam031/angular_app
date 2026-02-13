import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/lang';

@Component({
  selector: 'app-cash-sale',
  templateUrl: './cash-sale.html',
  styleUrls: ['./cash-sale.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class CashSaleComponent implements OnInit {
  @Output() closed = new EventEmitter<void>();

  constructor(public lang: LanguageService) {}
  // Dropdown data
  godownList: any[] = [
    { code: '001', name: 'गोखले - डवोए' },
    { code: '002', name: 'गोखले - आखा' },
    { code: '003', name: 'गोखले - पढत' }
  ];
  
  demandList: any[] = [
    { no: '11', year: '2025-2026' },
    { no: '12', year: '2025-2026' },
    { no: '13', year: '2025-2026' }
  ];
  
  supplierList: any[] = [
    { code: '00012', name: 'मे. जयंत ट्रेडर्स' },
    { code: '00013', name: 'मे. अनुल वौतिक' },
    { code: '00014', name: 'मे. धकल इंधस्ट्री कॉं' }
  ];
  
  // Header fields
  godownCode: string = '001';
  godownName: string = 'गोखले - डवोए';
  demandNo: string = '11';
  year: string = '2025-2026';
  currentDate: string = '05/02/2026';
  supplierCode: string = '00012';
  supplierName: string = 'मे. जयंत ट्रेडर्स';

  // Table Data
  items: any[] = [
    { code: '00001', name: 'गहू (३० किलो पॅक)', qty: 1, rate: 50.00 },
    { code: '', name: '', qty: 0, rate: 0 } // Empty row for entry
  ];

  totalQty: number = 0;

  ngOnInit(): void {
    this.calculateTotal();
  }

  onGodownChange() {
    const selected = this.godownList.find(g => g.code === this.godownCode);
    if (selected) {
      this.godownName = selected.name;
    }
  }

  onDemandChange() {
    const selected = this.demandList.find(d => d.no === this.demandNo);
    if (selected) {
      this.year = selected.year;
    }
  }

  onSupplierChange() {
    const selected = this.supplierList.find(s => s.code === this.supplierCode);
    if (selected) {
      this.supplierName = selected.name;
    }
  }

  calculateTotal() {
    this.totalQty = this.items.reduce((sum, item) => sum + (item.qty || 0), 0);
  }

  onSave() {
    console.log('Saving cash sale data...', this.items);
  }

  onCancel() {
    // Reset form logic
  }

  onPrint() {
    console.log('Printing cash sale...');
    window.print();
  }

  onClose() {
    this.closed.emit();
  }
}