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
import { StockBook } from '../report/stock-book/stock-book';
import { SalesRegister } from '../report/sales-register/sales-register';
import { BillList } from '../report/bill-list/bill-list';
import { StockRegisterComponent } from '../report/stock-register/stock-register';
import { DemandRegisterComponent } from '../report/demand-register/demand-register';
import { AccountInfoComponent } from '../report/account-info/account-info';
import { OutstandingComponent } from '../report/outstanding-demand/outstanding';
import { MemberInfoComponent } from '../master/member-info/member-info';
import { GrainInwardComponent } from '../master/grain-inward/grain-inward';


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
    DepositComponent,
    StockBook,
    SalesRegister,
    BillList,
    StockRegisterComponent,
    DemandRegisterComponent,
    AccountInfoComponent,
    OutstandingComponent,
    MemberInfoComponent,
    GrainInwardComponent
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
    // If clicking the same option, it deselects (returns cards)
    this.selectedOption = (this.selectedOption === option) ? null : option;
  }

  selectReport(reportKey: string) {
    // If clicking the same report, it deselects (returns cards)
    this.selectedOption = (this.selectedOption === reportKey) ? null : reportKey;
  }
}
