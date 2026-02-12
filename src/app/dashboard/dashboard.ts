import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../services/lang';
import { ItemInfoComponent } from '../master/item-info/item-info';
import { StockBook } from '../report/stock-book/stock-book';
import { SalesRegister } from '../report/sales-register/sales-register';
import { BillList } from "../report/bill-list/bill-list";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ItemInfoComponent,
    StockBook,
    SalesRegister,
    BillList
],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class Dashboard {

  constructor(public lang: LanguageService) {}

  activeTab: 'master' | 'report' = 'master';
  selectedOption: string | null = null;

  switchLang(l: 'mr' | 'en') {
    this.lang.setLang(l);
  }

  setTab(tab: 'master' | 'report') {
    this.activeTab = tab;
    this.selectedOption = null;
  }

  selectOption(option: string) {
    this.selectedOption = option;
  }

  selectReport(reportKey: string) {
    this.selectedOption = reportKey;
    console.log('Report selected:', reportKey);
  }
}
