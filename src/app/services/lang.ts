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
  | 'DEPOSIT'
  | 'LANGUAGE'
  | 'ITEM_ID'
  | 'ITEM_NAME'
  | 'WEIGHT'
  | 'UNIT_LIMIT'
  | 'RATE_EACH'
  | 'PURCHASE_RATE'
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
  | 'CREDIT'
  | 'DEBIT'
  | 'CREDIT_SALE'
  | 'DEMAND_REGISTER'
  | 'STOCK_REGISTER'
  | 'STOCK_BOOK'
  | 'SALES_REGISTER'
  | 'ACCOUNT_INFO'
  | 'BILL_LIST'
  | 'OUTSTANDING_DEMAND'
  | 'ENTER'
  | 'SELECT'
  | 'FROM_DATE'
  | 'TO_DATE'
  | 'LOCATION'
  | 'REFERENCE_CODE'
  | 'BALANCE_AS_ON_DATE'
  | 'ACCOUNT_TYPE'
  | 'TRADER_ACCOUNT'
  | 'CUSTOMER_ACCOUNT'
  | 'SUPPLIER_ACCOUNT'
  | 'START_CODE'
  | 'REPORT_CODE'
  | 'REFERENCE_DATE'
  | 'REPORT_DATE'
  | 'START_DATE'
  | 'END_DATE'
  | 'SALE_TYPE'
  | 'CASH'
  | 'ACCOUNT_CODE'
  | 'END_CODE'
  | 'ACCOUNT_NAME'
  | 'DATE'
  | 'NO'
  | 'DETAILS'
  | 'CREDIT_AMOUNT'
  | 'DEBIT_AMOUNT'
  | 'BALANCE'
  | 'REFERENCE_NO'
  | 'TRANSACTION_TYPE'
  | 'OPENING_BALANCE'
  | 'TRANSACTION'
  | 'TOTAL';


type Dictionary = {
  [L in Lang]: Record<TranslationKey, string>;
};

@Injectable({ providedIn: 'root' })
export class LanguageService {

  private currentLang: Lang = 'mr';

  private dictionary: Dictionary = {
    mr: {
      MASTER: 'मास्टर',
      START_CODE: 'सुरुवातीचा कोड',
      REPORT: 'रिपोर्ट',
      ITEM_INFO: 'आयटम माहिती',
      MEMBER_INFO: 'सभासद माहिती',
      END_CODE: 'अखेरचा कोड',
      SUPPLIER_INFO: 'सप्लायर माहिती',
      GRAIN_DEMAND: 'धान्य मागणी',
      GRAIN_INWARD: 'धान्य आवक',
      CASH_SALE: 'रोख विक्री',
      CREDIT_SALE: 'उधार विक्री',
      DEPOSIT: 'जमा',
      LANGUAGE: 'भाषा',
      CREDIT: 'जमा',
      DEBIT: 'नावे',
      START_DATE: 'सुरुवात तारीख',
      END_DATE: 'शेवट तारीख',
      SALE_TYPE: 'विक्री प्रकार',
      CASH: 'रोख',
      BALANCE_AS_ON_DATE: 'दिनांक प्रमाणे शिल्लक',
      ACCOUNT_TYPE: 'खाते प्रकार',
      TRADER_ACCOUNT: 'व्यापारी खाते',
      CUSTOMER_ACCOUNT: 'ग्राहक खाते',
      SUPPLIER_ACCOUNT: 'सप्लायर खाते',


      ACCOUNT_CODE: 'खाते कोड',
      ACCOUNT_NAME: 'खात्याचे नाव',
      DATE: 'तारीख',
      NO: 'क्र.',
      DETAILS: 'तपशील',
      CREDIT_AMOUNT: 'जमा रक्कम',
      DEBIT_AMOUNT: 'नावे रक्कम',
      BALANCE: 'शिल्लक',
      REFERENCE_NO: 'संदर्भ क्र.',
      TRANSACTION_TYPE: 'व्यवहार प्रकार',
      OPENING_BALANCE: 'आरंभिक शिल्लक',
      TRANSACTION: 'व्यवहार',
      TOTAL: 'एकूण',





      ITEM_ID: 'आयटम ID',
      ITEM_NAME: 'आयटम नाव',
      ITEM_CODE: 'आयटम कोड',
      WEIGHT: 'वजन',
      UNIT_LIMIT: 'नग मर्यादा',
      RATE_EACH: 'दर',
      PURCHASE_RATE: 'खरेदी दर',
      QUANTITY_QTL: 'प्रमाण (क्विंटल)',
      QUALITY_GRADE: 'गुणवत्ता',
      REMARKS: 'टिप्पणी',

      MEMBER_ID: 'सभासद ID',
      MEMBER_NAME: 'सभासद नाव',
      CONTACT_NUMBER: 'संपर्क क्रमांक',
      ADDRESS: 'पत्ता',
      ACTIVE_STATUS: 'स्थिती',

      SUPPLIER_ID: 'सप्लायर ID',
      SUPPLIER_NAME: 'सप्लायर नाव',
      SPECIALIZATION: 'विशेषज्ञता',
      CONTACT: 'संपर्क',
      EXPERIENCE: 'अनुभव',
      REPORT_DATE: 'अहवाल दिनांक',


      DEMAND_ID: 'मागणी ID',
      GRAIN_TYPE: 'धान्य प्रकार',
      REQUIRED_QUANTITY: 'आवश्यक प्रमाण',
      DELIVERY_DATE: 'डिलिव्हरी तारीख',
      PRIORITY_LEVEL: 'प्राधान्य',

      INWARD_ID: 'आवक ID',
      QUANTITY_RECEIVED_QTL: 'प्राप्त प्रमाण',
      QUALITY_CHECK: 'गुणवत्ता तपासणी',
      STORAGE_LOCATION: 'साठवण स्थान',

      TRANSACTION_ID: 'व्यवहार ID',
      QUANTITY_SOLD: 'विक्री प्रमाण',
      AMOUNT: 'रक्कम',
      PAYMENT_DATE: 'भरणा तारीख',

      CREDIT_ID: 'उधार ID',
      BUYER_NAME: 'खरेदीदार नाव',
      AMOUNT_DUE: 'देय रक्कम',
      PAYMENT_TERMS: 'भरणा अटी',

      DEPOSIT_ID: 'जमा ID',
      DEPOSIT_TYPE: 'जमा प्रकार',
      MATURITY_DATE: 'परिपक्वता तारीख',
      INTEREST_RATE: 'व्याज दर',

      SAVE: 'जतन करा',
      CLEAR: 'साफ करा',
      NEW: 'नवीन',
      EDIT: 'दुरुस्ती',
      CANCEL: 'रद्द',
      PRINT: 'छपाई',
      CLOSE: 'बंद',

      DEMAND_REGISTER: 'मागणी रजिस्टर',
      STOCK_REGISTER: 'स्टॉक रजिस्टर',
      STOCK_BOOK: 'स्टॉक बुक',
      SALES_REGISTER: 'विक्री रजिस्टर',
      ACCOUNT_INFO: 'खाते माहिती',
      BILL_LIST: 'बिल यादी',
      OUTSTANDING_DEMAND: 'शिल्लक मागणी',

      ENTER: 'दर्ज करा',
      SELECT: 'निवडा',
      FROM_DATE: 'सुरुवातीची तारीख',
      TO_DATE: 'अखेरची तारीख',
      LOCATION: 'ठिकाण',
      REFERENCE_CODE: 'संदर्भ कोड',
      REPORT_CODE: 'अहवाल कोड',
      REFERENCE_DATE: 'संदर्भ तारीख',

    },

    en: {
      MASTER: 'Master',
      REPORT: 'Report',
      ITEM_INFO: 'Item Info',
      START_CODE: 'Start Code',
      END_CODE: 'End Code',
      MEMBER_INFO: 'Member Info',
      SUPPLIER_INFO: 'Supplier Info',
      GRAIN_DEMAND: 'Grain Demand',
      GRAIN_INWARD: 'Grain Inward',
      CASH_SALE: 'Cash Sale',
      CREDIT_SALE: 'Credit Sale',
      DEPOSIT: 'Deposit',
      LANGUAGE: 'Language',
      BALANCE_AS_ON_DATE: 'Balance as on Date',
      ACCOUNT_TYPE: 'Account Type',
      TRADER_ACCOUNT: 'Trader Account',
      CUSTOMER_ACCOUNT: 'Customer Account',
      SUPPLIER_ACCOUNT: 'Supplier Account',


      ITEM_ID: 'Item ID',
      ITEM_NAME: 'Item Name',
      ITEM_CODE: 'Item Code',
      WEIGHT: 'Weight',
      UNIT_LIMIT: 'Unit Limit',
      RATE_EACH: 'Rate',
      PURCHASE_RATE: 'Purchase Rate',
      QUANTITY_QTL: 'Quantity (QTL)',
      QUALITY_GRADE: 'Quality',
      REMARKS: 'Remarks',
      CREDIT: 'Credit',
      DEBIT: 'Debit',
      START_DATE: 'Start Date',
      END_DATE: 'End Date',
      SALE_TYPE: 'Sale Type',
      CASH: 'Cash',


      ACCOUNT_CODE: 'Account Code',
      ACCOUNT_NAME: 'Account Name',
      DATE: 'Date',
      NO: 'No.',
      DETAILS: 'Details',
      CREDIT_AMOUNT: 'Credit Amount',
      DEBIT_AMOUNT: 'Debit Amount',
      BALANCE: 'Balance',
      REFERENCE_NO: 'Reference No.',
      TRANSACTION_TYPE: 'Transaction Type',
      OPENING_BALANCE: 'Opening Balance',
      TRANSACTION: 'Transaction',
      TOTAL: 'Total',




      MEMBER_ID: 'Member ID',
      MEMBER_NAME: 'Member Name',
      CONTACT_NUMBER: 'Contact Number',
      ADDRESS: 'Address',
      ACTIVE_STATUS: 'Status',

      SUPPLIER_ID: 'Supplier ID',
      SUPPLIER_NAME: 'Supplier Name',
      SPECIALIZATION: 'Specialization',
      CONTACT: 'Contact',
      EXPERIENCE: 'Experience',

      DEMAND_ID: 'Demand ID',
      GRAIN_TYPE: 'Grain Type',
      REQUIRED_QUANTITY: 'Required Quantity',
      DELIVERY_DATE: 'Delivery Date',
      PRIORITY_LEVEL: 'Priority',

      INWARD_ID: 'Inward ID',
      QUANTITY_RECEIVED_QTL: 'Quantity Received',
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
      REPORT_DATE: 'Report Date',
      REFERENCE_CODE: 'Reference Code',
      REPORT_CODE: 'Report Code',
      REFERENCE_DATE: 'Reference Date',


      ENTER: 'Enter',
      SELECT: 'Select',
      FROM_DATE: 'From Date',
      TO_DATE: 'To Date',
      LOCATION: 'Location'
    }
  };

  constructor() {
    const saved = localStorage.getItem('lang') as Lang | null;
    if (saved) this.currentLang = saved;
  }

  setLang(lang: Lang) {
    this.currentLang = lang;
    localStorage.setItem('lang', lang);
  }

  getLang(): Lang {
    return this.currentLang;
  }

  t(key: TranslationKey): string {
    return this.dictionary[this.currentLang][key];
  }
}
