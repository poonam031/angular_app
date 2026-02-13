import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LanguageService } from '../../services/lang';

@Component({
  selector: 'app-account-info',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgxDatatableModule
  ],
  templateUrl: './account-info.html',
  styleUrls: ['./account-info.scss']
})
export class AccountInfoComponent implements OnInit {

  @Output() closed = new EventEmitter<void>();

  accountCode = '';
  accountName = '';
  fromDate = '';
  toDate = '';

  rows: any[] = [];

  constructor(public lang: LanguageService) {}

  ngOnInit(): void {
    this.loadRows();
  }

  loadRows(): void {
    this.rows = [
      {
        date: '01/04/2020',
        no: 1,
        detailsKey: 'OPENING_BALANCE',
        credit: '0.00',
        debit: '0.00',
        balance: '0.00',
        refNo: 'REF001',
        typeKey: 'TRANSACTION'
      }
    ];
  }

  /* ✅ AUTO-UPDATES WHEN LANGUAGE CHANGES */
  get i18nMessages() {
    return {
      totalMessage: this.lang.t('TOTAL'),
      selectedMessage: this.lang.getLang() === 'mr'
        ? 'निवडले'
        : 'Selected'
    };
  }

  print(): void {
    console.log('Print clicked');
  }

  close(): void {
    this.closed.emit();
  }
}
