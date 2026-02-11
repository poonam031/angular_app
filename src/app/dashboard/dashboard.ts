import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LanguageService, type TranslationKey } from '../services/lang';

interface FormField {
  label: TranslationKey;
  value: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class Dashboard {
  constructor(public lang: LanguageService) {}

  activeTab: 'master' | 'report' = 'master';
  selectedOption: string | null = null;

  formFields: Record<string, FormField[]> = {
    'item-info': [
      { label: 'ITEM_INFO', value: '' },        
      { label: 'ITEM_ID', value: '' },
      { label: 'ITEM_NAME', value: '' },
      { label: 'QUANTITY_QTL', value: '' },
      { label: 'QUALITY_GRADE', value: '' },
      { label: 'SUPPLIER_NAME', value: '' },
      { label: 'REMARKS', value: '' }
    ],
    'member-info': [
      { label: 'MEMBER_ID', value: '' },
      { label: 'MEMBER_NAME', value: '' },
      { label: 'CONTACT_NUMBER', value: '' },
      { label: 'ADDRESS', value: '' },
      { label: 'ACTIVE_STATUS', value: '' }
    ],
    'supplier-info': [
      { label: 'SUPPLIER_ID', value: '' },
      { label: 'SUPPLIER_NAME', value: '' },
      { label: 'SPECIALIZATION', value: '' },
      { label: 'CONTACT', value: '' },
      { label: 'EXPERIENCE', value: '' }
    ],
    'grain-demand': [
      { label: 'DEMAND_ID', value: '' },
      { label: 'GRAIN_TYPE', value: '' },
      { label: 'REQUIRED_QUANTITY', value: '' },
      { label: 'DELIVERY_DATE', value: '' },
      { label: 'PRIORITY_LEVEL', value: '' }
    ],
    'grain-inward': [
      { label: 'INWARD_ID', value: '' },
      { label: 'GRAIN_TYPE', value: '' },
      { label: 'QUANTITY_RECEIVED_QTL', value: '' },
      { label: 'QUALITY_CHECK', value: '' },
      { label: 'STORAGE_LOCATION', value: '' }
    ],
    'cash-sale': [
      { label: 'TRANSACTION_ID', value: '' },
      { label: 'GRAIN_TYPE', value: '' },
      { label: 'QUANTITY_SOLD', value: '' },
      { label: 'AMOUNT', value: '' },
      { label: 'PAYMENT_DATE', value: '' }
    ],
    'credit-sale': [
      { label: 'CREDIT_ID', value: '' },
      { label: 'BUYER_NAME', value: '' },
      { label: 'GRAIN_TYPE', value: '' },
      { label: 'QUANTITY_SOLD', value: '' },
      { label: 'AMOUNT_DUE', value: '' },
      { label: 'PAYMENT_TERMS', value: '' }
    ],
    'deposit': [
      { label: 'DEPOSIT_ID', value: '' },
      { label: 'DEPOSIT_TYPE', value: '' },
      { label: 'AMOUNT', value: '' },
      { label: 'DEPOSIT_ID', value: '' },
      { label: 'MATURITY_DATE', value: '' },
      { label: 'INTEREST_RATE', value: '' }
    ]
  };

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



  getFormTitle(option: string): TranslationKey {
    const titles: Record<string, TranslationKey> = {
      'item-info': 'ITEM_INFO',
      'member-info': 'MEMBER_INFO',
      'supplier-info': 'SUPPLIER_INFO',
      'grain-demand': 'GRAIN_DEMAND',
      'grain-inward': 'GRAIN_INWARD',
      'cash-sale': 'CASH_SALE',
      'credit-sale': 'CREDIT_SALE',
      'deposit': 'DEPOSIT'
    };
    return titles[option] || 'MASTER';
  }


  selectReport(reportKey: string) {
  this.selectedOption = reportKey;

  console.log('Report selected:', reportKey);

  // Future use:
  // this.router.navigate(['/reports', reportKey]);
  // or open PDF / table / chart
}

}
