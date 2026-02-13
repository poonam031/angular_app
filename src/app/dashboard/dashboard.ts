import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../services/lang';
import { ItemInfoComponent } from '../master/item-info/item-info';
import { SupplierInfoComponent } from '../master/supplier-info/supplier-info';
import { CashSaleComponent } from '../master/cash-sale/cash-sale';
import { CreditSaleComponent } from '../master/credit-sale/credit-sale';
import { GrainDemandComponent } from '../master/grain-demand/grain-demand';
import { DepositComponent } from '../master/deposit/deposit';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ItemInfoComponent,
    SupplierInfoComponent,
    CashSaleComponent,
    CreditSaleComponent,
    GrainDemandComponent,
    DepositComponent
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
