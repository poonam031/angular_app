import { Injectable } from '@angular/core';

/* 1️⃣ Allowed languages */
export type Lang = 'mr' | 'en';

/* 2️⃣ Allowed translation keys */
export type TranslationKey =
  | 'MASTER'
  | 'REPORT'
  | 'ITEM_INFO'
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
  | 'DEMAND_REGISTER'
  | 'STOCK_REGISTER'
  | 'STOCK_BOOK'
  | 'SALES_REGISTER'
  | 'ACCOUNT_INFO'
  | 'BILL_LIST'
  | 'OUTSTANDING_DEMAND'
  | 'ENTER'
  | 'GODOWN'
  | 'DEMAND_NO'
  | 'DATE'
  | 'MEMBER_CODE'
  | 'CITY'
  | 'ITEM'
  | 'ITEM_CODE'
  | 'ITEM_LIST_NAME'
  | 'NOS'
  | 'TOTAL_NOS'
  | 'NEW'
  | 'EDIT'
  | 'DELETE'
  | 'PRINT'
  | 'CLOSE'
  | 'TOTAL_NOS'
| 'DEPOSIT_TYPE'
| 'MATURITY_DATE'
| 'INTEREST_RATE'
| 'SUPPLIER_MASTER'
| 'SUPPLIER_CODE'
| 'CASH_SALE_TITLE'
| 'TOTAL_QTY'
| 'RATE'
| 'CANCEL' 
| 'MEMBER_INFO_TITLE'
| 'SUPPLIER_INFO_TITLE'
| 'ITEM_INFO_TITLE'
| 'FATHER_NAME'
| 'MEMBER_NUMBER'
|'TYPE'
|'MALE'
|'FEMALE'
| 'CREDIT_SALE_TITLE'
| 'GODOWN_CODE'
| 'BILL_DATE'
| 'BILL_NUMBER'
| 'CURRENT_BALANCE'
| 'ITEM_AMOUNT'
| 'BILL_AMOUNT'
| 'PAYMENT_MODE'
| 'RECEIPT_NUMBER'
| 'RECEIPT_DATE'
|'UNIT'
|'WEIGHT'
|'LIMIT'
|'CREDIT'
|'CASH'
| 'GRAIN_INWARD_TITLE'
| 'GODOWN_CODE'
| 'INWARD_NO'
| 'FARMER_NAME'
| 'VEHICLE_NO'
| 'TOTAL_AMOUNT'
|'BILL_NO'


// | 'SUPPLIER_BALANCE'
// | 'MEMBER_BALANCE'
// | 'OPENING_BALANCE'
// | 'CLOSING_BALANCE'
// | 'TRANSACTION_TYPE'
// | 'TRANSACTION_DATE'
// | 'TRANSACTION_AMOUNT'
// | 'SUPPLIER_TRANSACTION_HISTORY'
// | 'MEMBER_TRANSACTION_HISTORY';






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
      QUANTITY_QTL: 'प्रमाण (क्विंटल)',
      QUALITY_GRADE: 'गुणवत्ता श्रेणी',
      REMARKS: 'टिप्पणी',
      MEMBER_ID: 'सभासद ID',
      MEMBER_NAME: 'सभासद नाव',
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
      DEMAND_REGISTER: 'मागणी रजिस्टर',
      STOCK_REGISTER: 'स्टॉक रजिस्टर',
      STOCK_BOOK: 'स्टॉक बुक ',
      SALES_REGISTER: 'विक्री रजिस्टर ',
      ACCOUNT_INFO: 'खाते माहिती',
      BILL_LIST: 'बिल यादी',
      OUTSTANDING_DEMAND: 'शिल्लक मागणी',
      ENTER: 'दर्ज करा',
      GODOWN: 'गोडाऊन',
DEMAND_NO: 'धान मागणी नं.',
DATE: 'तारीख',
MEMBER_CODE: 'सभासद कोड',
CITY: 'शहर',
ITEM: 'आयटम',
ITEM_CODE: 'आयटम क्रमांक',
ITEM_LIST_NAME: 'आयटमचे नाव',
NOS: 'नग',
TOTAL_NOS: 'एकूण नग',
NEW: 'नवीन',
EDIT: 'दुरुस्ती',
DELETE: 'रद्द',
PRINT: 'छपाई',
CLOSE: 'बंद',
SUPPLIER_MASTER: 'सप्लायर मास्टर',
SUPPLIER_CODE: 'सप्लायर कोड',
CASH_SALE_TITLE: 'रोख विक्री',
TOTAL_QTY: 'एकूण नग',
RATE: 'दर',
CANCEL: 'कॅन्सल',
MEMBER_INFO_TITLE: 'सभासद माहिती',
SUPPLIER_INFO_TITLE: 'सप्लायर माहिती',
ITEM_INFO_TITLE: 'आयटम माहिती',
FATHER_NAME : 'वडिलांचे नाव',
MEMBER_NUMBER: 'सभासद क्रमांक',
TYPE: 'प्रकार',
MALE: 'पुरुष',
FEMALE: 'महिला',
CREDIT_SALE_TITLE: 'क्रेडिट सेल (उधार विक्री)',
GODOWN_CODE: 'गोडाऊन कोड',
BILL_DATE: 'बिल तारीख',
BILL_NUMBER: 'बिल नंबर',
CURRENT_BALANCE: 'खाते बाकी',
ITEM_AMOUNT: 'रक्कम',
BILL_AMOUNT: 'बिलाची रक्कम',
PAYMENT_MODE: 'भुगतान का तरीका',
RECEIPT_NUMBER: 'रसीद नंबर',
RECEIPT_DATE: 'रसीद तारीख',
UNIT: 'युनिट',
WEIGHT: 'वजन',
LIMIT: 'सीमा',
CREDIT: 'उधार',
CASH: 'रोख',
GRAIN_INWARD_TITLE: 'धान्य आवक',
// GODOWN_CODE: 'गोडाऊन कोड',
INWARD_NO: 'आवक क्रमांक',
FARMER_NAME: 'शेतकरी नाव',
VEHICLE_NO: 'वाहन क्रमांक',
TOTAL_AMOUNT: 'एकूण रक्कम',
BILL_NO: 'बिल नंबर',






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
      DEMAND_REGISTER: 'Demand Register',
      STOCK_REGISTER: 'Stock Register',
      STOCK_BOOK: 'Stock Book',
      SALES_REGISTER: 'Sales Register',
      ACCOUNT_INFO: 'Account Information',
      BILL_LIST: 'Bill List',
      OUTSTANDING_DEMAND: 'Outstanding Demand',
      ENTER: 'Enter', 
      GODOWN: 'Godown',
DEMAND_NO: 'Demand No.',
DATE: 'Date',
MEMBER_CODE: 'Member Code',
CITY: 'City',
ITEM: 'Item',
ITEM_CODE: 'Item Code',
ITEM_LIST_NAME: 'Item Name',
NOS: 'Nos',
TOTAL_NOS: 'Total Nos',
NEW: 'New',
EDIT: 'Edit',
DELETE: 'Delete',
PRINT: 'Print',
CLOSE: 'Close',
SUPPLIER_MASTER: 'Supplier Master',
SUPPLIER_CODE: 'Supplier Code',
CASH_SALE_TITLE: 'Cash Sale',
TOTAL_QTY: 'Total Qty',
RATE: 'Rate',
CANCEL: 'Cancel',
MEMBER_INFO_TITLE: 'Member Information',
SUPPLIER_INFO_TITLE: 'Supplier Information',
ITEM_INFO_TITLE: 'Item Information',
FATHER_NAME : 'Father Name',
MEMBER_NUMBER: 'Member Number',
TYPE: 'Type',
MALE: 'Male',
FEMALE: 'Female',
CREDIT_SALE_TITLE: 'Credit Sale',
GODOWN_CODE: 'Godown Code',
BILL_DATE: 'Bill Date',
BILL_NUMBER: 'Bill Number',
CURRENT_BALANCE: 'Current Balance',
ITEM_AMOUNT: 'Amount',
BILL_AMOUNT: 'Bill Amount',
PAYMENT_MODE: 'Payment Mode',
RECEIPT_NUMBER: 'Receipt Number',
RECEIPT_DATE: 'Receipt Date',
UNIT: 'Unit',
WEIGHT: 'Weight',
LIMIT: 'Limit',
CREDIT: 'Credit',
CASH: 'Cash',
GRAIN_INWARD_TITLE: 'Grain Inward',
// GODOWN_CODE: 'Godown Code',
INWARD_NO: 'Inward No',
FARMER_NAME: 'Farmer Name',
VEHICLE_NO: 'Vehicle No',
TOTAL_AMOUNT: 'Total Amount',
BILL_NO: 'Bill No',




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