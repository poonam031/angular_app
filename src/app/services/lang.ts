import { Injectable } from '@angular/core';

/* 1️⃣ Allowed languages */
export type Lang = 'mr' | 'en';

/* 2️⃣ Allowed translation keys */
export type TranslationKey =
  | 'MASTER'
  | 'REPORT'
  | 'ITEM_INFO'
  | 'ITEM_CODE'
  | 'MEMBER_INFO'
  | 'SUPPLIER_INFO'
  | 'GRAIN_DEMAND'
  | 'GRAIN_INWARD'
  | 'CASH_SALE'
  | 'CREDIT_SALE'
  | 'DEPOSIT'
  | 'LANGUAGE'
  | 'ITEM_ID'
  | 'ITEM_NAME'
  | 'WEIGHT'
  | 'UNIT_LIMIT'
  | 'RATE_EACH'
  | 'PURCHASE_RATE'
  | 'CREDIT'
  | 'QUANTITY_QTL'
  | 'QUALITY_GRADE'
  | 'REMARKS'
  | 'MEMBER_ID'
  | 'MEMBER_NAME'
  | 'CONTACT_NUMBER'
  | 'ADDRESS'
  | 'ACTIVE_STATUS'
  | 'SUPPLIER_ID'
  | 'SUPPLIER_NAME'
  | 'SPECIALIZATION'
  | 'CONTACT'
  | 'EXPERIENCE'
  | 'DEMAND_ID'
  | 'GRAIN_TYPE'
  | 'REQUIRED_QUANTITY'
  | 'DELIVERY_DATE'
  | 'PRIORITY_LEVEL'
  | 'INWARD_ID'
  | 'QUANTITY_RECEIVED_QTL'
  | 'QUALITY_CHECK'
  | 'STORAGE_LOCATION'
  | 'TRANSACTION_ID'
  | 'QUANTITY_SOLD'
  | 'AMOUNT'
  | 'PAYMENT_DATE'
  | 'CREDIT_ID'
  | 'BUYER_NAME'
  | 'AMOUNT_DUE'
  | 'PAYMENT_TERMS'
  | 'DEPOSIT_ID'
  | 'DEPOSIT_TYPE'
  | 'MATURITY_DATE'
  | 'INTEREST_RATE'
  | 'SAVE'
  | 'CLEAR'
  | 'NEW'
  | 'EDIT'
  | 'CANCEL'
  | 'PRINT'
  | 'CLOSE'
  | 'DEMAND_REGISTER'
  | 'STOCK_REGISTER'
  | 'STOCK_BOOK'
  | 'SALES_REGISTER'
  | 'ACCOUNT_INFO'
  | 'BILL_LIST'
  | 'OUTSTANDING_DEMAND'
  | 'REFERENCE_CODE'
  | 'REPORT_CODE'
  | 'REFERENCE_DATE'
  | 'REPORT_DATE'
  | 'START_DATE'
  | 'END_DATE'
  | 'SALE_TYPE'
  | 'CASH'
  | 'CREDIT'
  | 'BALANCE_AS_ON_DATE'
  | 'ACCOUNT_TYPE'
  | 'TRADER_ACCOUNT'
  | 'CUSTOMER_ACCOUNT'
  | 'SUPPLIER_ACCOUNT'
  | 'SELECT'
  | 'ENTER';

/* 3️⃣ Dictionary shape */
type Dictionary = {
  [L in Lang]: Record<TranslationKey, string>;
};

@Injectable({ providedIn: 'root' })
export class LanguageService {

  /* 4️⃣ Current language */
  private currentLang: Lang = 'mr';

  /* 5️⃣ All translations */
  private dictionary: Dictionary = {
    mr: {
      MASTER: 'मास्टर',
      REPORT: 'रिपोर्ट',
      ITEM_INFO: 'आयटम माहीती',
      MEMBER_INFO: 'सभासद माहीती',
      SUPPLIER_INFO: 'सप्लायर माहीती ',
      GRAIN_DEMAND: 'धान्य मागणी',
      GRAIN_INWARD: 'धान्य आवक',
      CASH_SALE: 'रोख विक्री',
      CREDIT_SALE: 'उधार विक्री',
      DEPOSIT: 'जमा व्यवहार',
      LANGUAGE: 'भाषा',
      ITEM_ID: 'आयटम ID',
      ITEM_NAME: 'आयटम नाव',
      ITEM_CODE: 'आयटम कोड',
      WEIGHT: 'वजन',
      UNIT_LIMIT: 'नग मर्यादा',
      RATE_EACH: 'पदर प्रत्येकी',
      PURCHASE_RATE: 'खरेदी दर',
      CREDIT: 'उधार',
      QUANTITY_QTL: 'प्रमाण (क्विंटल)',
      QUALITY_GRADE: 'गुणवत्ता श्रेणी',
      REMARKS: 'टिप्पणी',
      MEMBER_ID: 'समासद ID',
      MEMBER_NAME: 'समासद नाव',
      CONTACT_NUMBER: 'संपर्क क्रमांक',
      ADDRESS: 'पत्ता',
      ACTIVE_STATUS: 'सक्रिय स्थिती',
      SUPPLIER_ID: 'सप्लायर ID',
      SUPPLIER_NAME: 'सप्लायर नाव',
      SPECIALIZATION: 'विशेषज्ञता',
      CONTACT: 'संपर्क',
      EXPERIENCE: 'अनुभव',
      DEMAND_ID: 'मागणी ID',
      GRAIN_TYPE: 'धान्य प्रकार',
      REQUIRED_QUANTITY: 'आवश्यक प्रमाण',
      DELIVERY_DATE: 'डिलिव्हरी तारीख',
      PRIORITY_LEVEL: 'प्राधान्य स्तर',
      INWARD_ID: 'आवक ID',
      QUANTITY_RECEIVED_QTL: 'प्राप्त प्रमाण (क्विंटल)',
      QUALITY_CHECK: 'गुणवत्ता तपासणी',
      STORAGE_LOCATION: 'संचय स्थान',
      TRANSACTION_ID: 'व्यवहार ID',
      QUANTITY_SOLD: 'विक्री प्रमाण',
      AMOUNT: 'रक्कम',
      PAYMENT_DATE: 'भुगतान तारीख',
      CREDIT_ID: 'क्रेडिट ID',
      BUYER_NAME: 'खरेदीदारचे नाव',
      AMOUNT_DUE: 'देय रक्कम',
      PAYMENT_TERMS: 'भुगतान अटी',
      DEPOSIT_ID: 'जमा ID',
      DEPOSIT_TYPE: 'जमा प्रकार',
      MATURITY_DATE: 'परिपक्कता तारीख',
      INTEREST_RATE: 'व्याज दर',
      SAVE: 'जतन करा',
      CLEAR: 'क्लिअर करा',
      NEW: "नवीन",
      EDIT: "दुरुस्ती",
      CANCEL: "रद्द",
      PRINT: "छपाई",
      CLOSE: "बंद",
      DEMAND_REGISTER: 'मागणी रजिस्टर',
      STOCK_REGISTER: 'स्टॉक रजिस्टर',
      STOCK_BOOK: 'स्टॉक बुक ',
      SALES_REGISTER: 'विक्री रजिस्टर ',
      ACCOUNT_INFO: 'खाते माहिती',
      BILL_LIST: 'बिल यादी',
      OUTSTANDING_DEMAND: 'शिल्लक मागणी',
      ENTER: 'दर्ज करा',
      REFERENCE_CODE: "सुरुवातीचा कोड",
      REPORT_CODE: "अखेरचा कोड",
      REFERENCE_DATE: "सुरुवातीचा तारीख",
      REPORT_DATE: "अखेरचा तारीख",
      START_DATE: "आरंभीची तारीख", 
      END_DATE: "अखेरची तारीख",
      SALE_TYPE: "विक्री प्रकार", 
      CASH: "रोख",
      BALANCE_AS_ON_DATE: "शिल्लक यादी रोजी",
      ACCOUNT_TYPE: "खाते प्रकार",
      SELECT: "निवडा",
      TRADER_ACCOUNT: "व्यापारी येणे",
      CUSTOMER_ACCOUNT: "ग्राहक येणे",
      SUPPLIER_ACCOUNT: "पुरवठादार येणे",
    },
    en: {
      MASTER: 'Master',
      REPORT: 'Report',
      ITEM_INFO: 'Item Info',
      MEMBER_INFO: 'Member Info',
      SUPPLIER_INFO: 'Supplier Info',
      GRAIN_DEMAND: 'Grain Demand',
      GRAIN_INWARD: 'Grain Inward',
      CASH_SALE: 'Cash Sale',
      CREDIT_SALE: 'Credit Sale',
      DEPOSIT: 'Deposit',
      LANGUAGE: 'Language',
      ITEM_ID: 'Item ID',
      ITEM_NAME: 'Item Name',
      ITEM_CODE: 'Item Code',
      WEIGHT: 'Weight',
      UNIT_LIMIT: 'Unit Limit',
      RATE_EACH: 'Rate Each',
      PURCHASE_RATE: 'Purchase Rate',
      CREDIT: 'Credit',
      QUANTITY_QTL: 'Quantity (QTL)',
      QUALITY_GRADE: 'Quality Grade',
      REMARKS: 'Remarks',
      MEMBER_ID: 'Member ID',
      MEMBER_NAME: 'Member Name',
      CONTACT_NUMBER: 'Contact Number',
      ADDRESS: 'Address',
      ACTIVE_STATUS: 'Active Status',
      SUPPLIER_ID: 'Supplier ID',
      SUPPLIER_NAME: 'Supplier Name',
      SPECIALIZATION: 'Specialization',
      CONTACT: 'Contact',
      EXPERIENCE: 'Experience',
      DEMAND_ID: 'Demand ID',
      GRAIN_TYPE: 'Grain Type',
      REQUIRED_QUANTITY: 'Required Quantity',
      DELIVERY_DATE: 'Delivery Date',
      PRIORITY_LEVEL: 'Priority Level',
      INWARD_ID: 'Inward ID',
      QUANTITY_RECEIVED_QTL: 'Quantity Received (QTL)',
      QUALITY_CHECK: 'Quality Check',
      STORAGE_LOCATION: 'Storage Location',
      TRANSACTION_ID: 'Transaction ID',
      QUANTITY_SOLD: 'Quantity Sold',
      AMOUNT: 'Amount',
      PAYMENT_DATE: 'Payment Date',
      CREDIT_ID: 'Credit ID',
      BUYER_NAME: 'Buyer Name',
      AMOUNT_DUE: 'Amount Due',
      PAYMENT_TERMS: 'Payment Terms',
      DEPOSIT_ID: 'Deposit ID',
      DEPOSIT_TYPE: 'Deposit Type',
      MATURITY_DATE: 'Maturity Date',
      INTEREST_RATE: 'Interest Rate',
      SAVE: 'Save',
      CLEAR: 'Clear',
      NEW: 'New',
      EDIT: 'Edit',
      CANCEL: 'Cancel',
      PRINT: 'Print',
      CLOSE: 'Close',
      DEMAND_REGISTER: 'Demand Register',
      STOCK_REGISTER: 'Stock Register',
      STOCK_BOOK: 'Stock Book',
      SALES_REGISTER: 'Sales Register',
      ACCOUNT_INFO: 'Account Information',
      BILL_LIST: 'Bill List',
      OUTSTANDING_DEMAND: 'Outstanding Demand',
      ENTER: 'Enter',
      REFERENCE_CODE: 'Reference Code',
      REPORT_CODE: 'Report Code',
      REFERENCE_DATE: 'Reference Date',
      REPORT_DATE: 'Report Date',
      START_DATE: 'Start Date',
      END_DATE: 'End Date',
      SALE_TYPE: 'Sale Type',
      CASH: 'Cash',
      BALANCE_AS_ON_DATE: 'Balance As On Date',
      ACCOUNT_TYPE: 'Account Type',
      SELECT: 'Select',
      TRADER_ACCOUNT: 'Trader Receivable Account',
      CUSTOMER_ACCOUNT: 'Customer Receivable Account',
      SUPPLIER_ACCOUNT: 'Supplier Receivable Account',
    }
  };

  constructor() {
    const saved = localStorage.getItem('lang') as Lang | null;
    if (saved) this.currentLang = saved;
  }

  /* 6️⃣ Change language */
  setLang(lang: Lang) {
    this.currentLang = lang;
    localStorage.setItem('lang', lang);
  }

  /* 7️⃣ Get current language */
  getLang(): Lang {
    return this.currentLang;
  }

  /* 8️⃣ Translate function */
  t(key: TranslationKey): string {
    return this.dictionary[this.currentLang][key];
  }
}
