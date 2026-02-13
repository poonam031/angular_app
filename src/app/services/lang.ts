import { Injectable } from '@angular/core';

/* 1️⃣ Allowed languages */
export type Lang = 'mr' | 'en';

/* 2️⃣ Allowed translation keys */
export type TranslationKey =
  | 'MASTER'
  | 'REPORT'
  | 'LANGUAGE'

  | 'ITEM_INFO'
  | 'ITEM_INFO_TITLE'
  | 'ITEM_ID'
  | 'ITEM_CODE'
  | 'ITEM_NAME'
  | 'ITEM_LIST_NAME'
  | 'ITEM_AMOUNT'

  | 'MEMBER_INFO'
  | 'MEMBER_INFO_TITLE'
  | 'MEMBER_ID'
  | 'MEMBER_CODE'
  | 'MEMBER_NAME'
  | 'MEMBER_NUMBER'
  | 'FATHER_NAME'
  | 'CONTACT_NUMBER'
  | 'ADDRESS'
  | 'CITY'
  | 'TYPE'
  | 'MALE'
  | 'FEMALE'
  | 'ACTIVE_STATUS'

  | 'SUPPLIER_INFO'
  | 'SUPPLIER_INFO_TITLE'
  | 'SUPPLIER_MASTER'
  | 'SUPPLIER_ID'
  | 'SUPPLIER_CODE'
  | 'SUPPLIER_NAME'
  | 'SPECIALIZATION'
  | 'CONTACT'
  | 'EXPERIENCE'

  | 'GRAIN_DEMAND'
  | 'DEMAND_REGISTER'
  | 'DEMAND_ID'
  | 'DEMAND_NO'
  | 'REQUIRED_QUANTITY'
  | 'PRIORITY_LEVEL'

  | 'GRAIN_INWARD'
  | 'GRAIN_INWARD_TITLE'
  | 'INWARD_ID'
  | 'INWARD_NO'
  | 'FARMER_NAME'
  | 'VEHICLE_NO'
  | 'QUANTITY_RECEIVED_QTL'
  | 'QUALITY_CHECK'
  | 'STORAGE_LOCATION'

  | 'STOCK_REGISTER'
  | 'STOCK_BOOK'
  | 'SALES_REGISTER'
  | 'ACCOUNT_INFO'
  | 'BILL_LIST'
  | 'OUTSTANDING_DEMAND'

  | 'CASH_SALE'
  | 'CASH_SALE_TITLE'
  | 'CREDIT_SALE'
  | 'CREDIT_SALE_TITLE'

  | 'TRANSACTION_ID'
  | 'TRANSACTION_TYPE'
  | 'TRANSACTION'
  | 'DATE'
  | 'DELIVERY_DATE'
  | 'PAYMENT_DATE'
  | 'PAYMENT_MODE'
  | 'RECEIPT_NUMBER'
  | 'RECEIPT_DATE'

  | 'QUANTITY_QTL'
  | 'QUANTITY_SOLD'
  | 'NOS'
  | 'TOTAL_NOS'
  | 'TOTAL_QTY'
  | 'TOTAL_AMOUNT'
  | 'WEIGHT'
  | 'UNIT'
  | 'LIMIT'
  | 'RATE'
  | 'AMOUNT'
  | 'BILL_AMOUNT'
  | 'BILL_DATE'
  | 'BILL_NO'
  | 'BILL_NUMBER'
  | 'CURRENT_BALANCE'

  | 'DEPOSIT'
  | 'DEPOSIT_ID'
  | 'DEPOSIT_TYPE'
  | 'MATURITY_DATE'
  | 'INTEREST_RATE'

  | 'CREDIT'
  | 'DEBIT'
  | 'CASH'

  | 'NEW'
  | 'EDIT'
  | 'DELETE'
  | 'SAVE'
  | 'CLEAR'
  | 'CANCEL'
  | 'PRINT'
  | 'CLOSE'
  | 'ENTER'
  | 'SELECT'
  | 'START_DATE'
  | 'END_DATE'
  | 'FROM_DATE'
  | 'TO_DATE'
  | 'LOCATION'
  | 'TOTAL'
  | 'END_CODE'

   | 'BUYER_NAME'
  | 'REMARKS'
  | 'GODOWN'
  | 'ITEM'
  | 'GODOWN_CODE'

  | 'ACCOUNT_CODE'
  | 'ACCOUNT_NAME'

  | 'NO'
  | 'DETAILS'

  | 'CREDIT_AMOUNT'
  | 'DEBIT_AMOUNT'
  | 'BALANCE'
  | 'REFERENCE_NO'

  | 'BALANCE_AS_ON_DATE'
  | 'ACCOUNT_TYPE'
  | 'TRADER_ACCOUNT'
  | 'CUSTOMER_ACCOUNT'
  | 'SUPPLIER_ACCOUNT'

  | 'SALE_TYPE'

  | 'REFERENCE_CODE'
  | 'REPORT_CODE'
  | 'REFERENCE_DATE'
  | 'REPORT_DATE'
  | 'START_CODE';
;


/* 3️⃣ Dictionary shape */
type Dictionary = {
  [L in Lang]: Record<TranslationKey, string>;
};

@Injectable({ providedIn: 'root' })
export class LanguageService {

  private currentLang: Lang = 'mr';

  private dictionary: Dictionary = {
    mr: {
      MASTER: 'मास्टर',
      REPORT: 'रिपोर्ट',
      LANGUAGE: 'भाषा',

      ITEM_INFO: 'आयटम माहिती',
      ITEM_INFO_TITLE: 'आयटम माहिती',
      ITEM_ID: 'आयटम ID',
      ITEM_CODE: 'आयटम कोड',
      ITEM_NAME: 'आयटम नाव',
      ITEM_LIST_NAME: 'आयटमचे नाव',
      ITEM_AMOUNT: 'रक्कम',

      MEMBER_INFO: 'सभासद माहिती',
      MEMBER_INFO_TITLE: 'सभासद माहिती',
      MEMBER_ID: 'सभासद ID',
      MEMBER_CODE: 'सभासद कोड',
      MEMBER_NAME: 'सभासद नाव',
      MEMBER_NUMBER: 'सभासद क्रमांक',
      FATHER_NAME: 'वडिलांचे नाव',
      CONTACT_NUMBER: 'संपर्क क्रमांक',
      ADDRESS: 'पत्ता',
      CITY: 'शहर',
      TYPE: 'प्रकार',
      MALE: 'पुरुष',
      FEMALE: 'महिला',
      ACTIVE_STATUS: 'स्थिती',

      SUPPLIER_INFO: 'सप्लायर माहिती',
      SUPPLIER_INFO_TITLE: 'सप्लायर माहिती',
      SUPPLIER_MASTER: 'सप्लायर मास्टर',
      SUPPLIER_ID: 'सप्लायर ID',
      SUPPLIER_CODE: 'सप्लायर कोड',
      SUPPLIER_NAME: 'सप्लायर नाव',
      SPECIALIZATION: 'विशेषज्ञता',
      CONTACT: 'संपर्क',
      EXPERIENCE: 'अनुभव',

      GRAIN_DEMAND: 'धान्य मागणी',
      DEMAND_REGISTER: 'मागणी रजिस्टर',
      DEMAND_ID: 'मागणी ID',
      DEMAND_NO: 'मागणी क्रमांक',
      REQUIRED_QUANTITY: 'आवश्यक प्रमाण',
      PRIORITY_LEVEL: 'प्राधान्य',

      GRAIN_INWARD: 'धान्य आवक',
      GRAIN_INWARD_TITLE: 'धान्य आवक',
      INWARD_ID: 'आवक ID',
      INWARD_NO: 'आवक क्रमांक',
      FARMER_NAME: 'शेतकरी नाव',
      VEHICLE_NO: 'वाहन क्रमांक',
      QUANTITY_RECEIVED_QTL: 'प्राप्त प्रमाण',
      QUALITY_CHECK: 'गुणवत्ता तपासणी',
      STORAGE_LOCATION: 'साठवण स्थान',

      STOCK_REGISTER: 'स्टॉक रजिस्टर',
      STOCK_BOOK: 'स्टॉक बुक',
      SALES_REGISTER: 'विक्री रजिस्टर',
      ACCOUNT_INFO: 'खाते माहिती',
      BILL_LIST: 'बिल यादी',
      OUTSTANDING_DEMAND: 'शिल्लक मागणी',

      CASH_SALE: 'रोख विक्री',
      CASH_SALE_TITLE: 'रोख विक्री',
      CREDIT_SALE: 'उधार विक्री',
      CREDIT_SALE_TITLE: 'उधार विक्री',

      TRANSACTION_ID: 'व्यवहार ID',
      TRANSACTION_TYPE: 'व्यवहार प्रकार',
      TRANSACTION: 'व्यवहार',
      DATE: 'तारीख',
      DELIVERY_DATE: 'डिलिव्हरी तारीख',
      PAYMENT_DATE: 'भरणा तारीख',
      PAYMENT_MODE: 'भरणा प्रकार',
      RECEIPT_NUMBER: 'पावती क्रमांक',
      RECEIPT_DATE: 'पावती तारीख',

      QUANTITY_QTL: 'प्रमाण (क्विंटल)',
      QUANTITY_SOLD: 'विक्री प्रमाण',
      NOS: 'नग',
      TOTAL_NOS: 'एकूण नग',
      TOTAL_QTY: 'एकूण नग',
      TOTAL_AMOUNT: 'एकूण रक्कम',
      WEIGHT: 'वजन',
      UNIT: 'युनिट',
      LIMIT: 'मर्यादा',
      RATE: 'दर',
      AMOUNT: 'रक्कम',
      BILL_AMOUNT: 'बिल रक्कम',
      BILL_DATE: 'बिल तारीख',
      BILL_NO: 'बिल क्रमांक',
      BILL_NUMBER: 'बिल नंबर',
      CURRENT_BALANCE: 'शिल्लक',

      DEPOSIT: 'जमा',
      DEPOSIT_ID: 'जमा ID',
      DEPOSIT_TYPE: 'जमा प्रकार',
      MATURITY_DATE: 'परिपक्वता तारीख',
      INTEREST_RATE: 'व्याज दर',

      CREDIT: 'जमा',
      DEBIT: 'नावे',
      CASH: 'रोख',

      NEW: 'नवीन',
      EDIT: 'दुरुस्ती',
      DELETE: 'रद्द',
      SAVE: 'जतन करा',
      CLEAR: 'साफ करा',
      CANCEL: 'कॅन्सल',
      PRINT: 'छपाई',
      CLOSE: 'बंद',
      ENTER: 'दर्ज करा',
      SELECT: 'निवडा',
      START_DATE: 'सुरुवात तारीख',
      END_DATE: 'शेवट तारीख',
      FROM_DATE: 'सुरुवातीची तारीख',
      TO_DATE: 'अखेरची तारीख',
      LOCATION: 'ठिकाण',
      TOTAL: 'एकूण',
      END_CODE: 'अखेरचा कोड',

      BUYER_NAME: 'खरेदीदार नाव',
REMARKS: 'शेरा',
GODOWN: 'गोदाम',
ITEM: 'माल',
GODOWN_CODE: 'गोदाम कोड',

ACCOUNT_CODE: 'खाते क्रमांक',
ACCOUNT_NAME: 'खाते नाव',

NO: 'क्रमांक',
DETAILS: 'तपशील',

CREDIT_AMOUNT: 'जमा रक्कम',
DEBIT_AMOUNT: 'नावे रक्कम',
BALANCE: 'शिल्लक',
REFERENCE_NO: 'संदर्भ क्रमांक',

BALANCE_AS_ON_DATE: 'दिनांकनुसार शिल्लक',
ACCOUNT_TYPE: 'खाते प्रकार',
TRADER_ACCOUNT: 'व्यापारी खाते',
CUSTOMER_ACCOUNT: 'ग्राहक खाते',
SUPPLIER_ACCOUNT: 'पुरवठादार खाते',

SALE_TYPE: 'विक्री प्रकार',

REFERENCE_CODE: 'संदर्भ कोड',
REPORT_CODE: 'अहवाल कोड',
REFERENCE_DATE: 'संदर्भ तारीख',
REPORT_DATE: 'अहवाल तारीख',
START_CODE: 'प्रारंभ कोड',



    },

    en: {
      MASTER: 'Master',
      REPORT: 'Report',
      LANGUAGE: 'Language',

      ITEM_INFO: 'Item Info',
      ITEM_INFO_TITLE: 'Item Information',
      ITEM_ID: 'Item ID',
      ITEM_CODE: 'Item Code',
      ITEM_NAME: 'Item Name',
      ITEM_LIST_NAME: 'Item Name',
      ITEM_AMOUNT: 'Amount',

      MEMBER_INFO: 'Member Info',
      MEMBER_INFO_TITLE: 'Member Information',
      MEMBER_ID: 'Member ID',
      MEMBER_CODE: 'Member Code',
      MEMBER_NAME: 'Member Name',
      MEMBER_NUMBER: 'Member Number',
      FATHER_NAME: 'Father Name',
      CONTACT_NUMBER: 'Contact Number',
      ADDRESS: 'Address',
      CITY: 'City',
      TYPE: 'Type',
      MALE: 'Male',
      FEMALE: 'Female',
      ACTIVE_STATUS: 'Status',

      SUPPLIER_INFO: 'Supplier Info',
      SUPPLIER_INFO_TITLE: 'Supplier Information',
      SUPPLIER_MASTER: 'Supplier Master',
      SUPPLIER_ID: 'Supplier ID',
      SUPPLIER_CODE: 'Supplier Code',
      SUPPLIER_NAME: 'Supplier Name',
      SPECIALIZATION: 'Specialization',
      CONTACT: 'Contact',
      EXPERIENCE: 'Experience',

      GRAIN_DEMAND: 'Grain Demand',
      DEMAND_REGISTER: 'Demand Register',
      DEMAND_ID: 'Demand ID',
      DEMAND_NO: 'Demand No',
      REQUIRED_QUANTITY: 'Required Quantity',
      PRIORITY_LEVEL: 'Priority',

      GRAIN_INWARD: 'Grain Inward',
      GRAIN_INWARD_TITLE: 'Grain Inward',
      INWARD_ID: 'Inward ID',
      INWARD_NO: 'Inward No',
      FARMER_NAME: 'Farmer Name',
      VEHICLE_NO: 'Vehicle No',
      QUANTITY_RECEIVED_QTL: 'Quantity Received',
      QUALITY_CHECK: 'Quality Check',
      STORAGE_LOCATION: 'Storage Location',

      STOCK_REGISTER: 'Stock Register',
      STOCK_BOOK: 'Stock Book',
      SALES_REGISTER: 'Sales Register',
      ACCOUNT_INFO: 'Account Information',
      BILL_LIST: 'Bill List',
      OUTSTANDING_DEMAND: 'Outstanding Demand',

      CASH_SALE: 'Cash Sale',
      CASH_SALE_TITLE: 'Cash Sale',
      CREDIT_SALE: 'Credit Sale',
      CREDIT_SALE_TITLE: 'Credit Sale',

      TRANSACTION_ID: 'Transaction ID',
      TRANSACTION_TYPE: 'Transaction Type',
      TRANSACTION: 'Transaction',
      DATE: 'Date',
      DELIVERY_DATE: 'Delivery Date',
      PAYMENT_DATE: 'Payment Date',
      PAYMENT_MODE: 'Payment Mode',
      RECEIPT_NUMBER: 'Receipt Number',
      RECEIPT_DATE: 'Receipt Date',

      QUANTITY_QTL: 'Quantity (QTL)',
      QUANTITY_SOLD: 'Quantity Sold',
      NOS: 'Nos',
      TOTAL_NOS: 'Total Nos',
      TOTAL_QTY: 'Total Qty',
      TOTAL_AMOUNT: 'Total Amount',
      WEIGHT: 'Weight',
      UNIT: 'Unit',
      LIMIT: 'Limit',
      RATE: 'Rate',
      AMOUNT: 'Amount',
      BILL_AMOUNT: 'Bill Amount',
      BILL_DATE: 'Bill Date',
      BILL_NO: 'Bill No',
      BILL_NUMBER: 'Bill Number',
      CURRENT_BALANCE: 'Current Balance',

      DEPOSIT: 'Deposit',
      DEPOSIT_ID: 'Deposit ID',
      DEPOSIT_TYPE: 'Deposit Type',
      MATURITY_DATE: 'Maturity Date',
      INTEREST_RATE: 'Interest Rate',

      CREDIT: 'Credit',
      DEBIT: 'Debit',
      CASH: 'Cash',

      NEW: 'New',
      EDIT: 'Edit',
      DELETE: 'Delete',
      SAVE: 'Save',
      CLEAR: 'Clear',
      CANCEL: 'Cancel',
      PRINT: 'Print',
      CLOSE: 'Close',
      ENTER: 'Enter',
      SELECT: 'Select',
      START_DATE: 'Start Date',
      END_DATE: 'End Date',
      FROM_DATE: 'From Date',
      TO_DATE: 'To Date',
      LOCATION: 'Location',
      TOTAL: 'Total',
      END_CODE: 'End Code',

      BUYER_NAME: 'Buyer Name',
REMARKS: 'Remarks',
GODOWN: 'Godown',
ITEM: 'Item',
GODOWN_CODE: 'Godown Code',

ACCOUNT_CODE: 'Account Code',
ACCOUNT_NAME: 'Account Name',

NO: 'No',
DETAILS: 'Details',

CREDIT_AMOUNT: 'Credit Amount',
DEBIT_AMOUNT: 'Debit Amount',
BALANCE: 'Balance',
REFERENCE_NO: 'Reference No',

BALANCE_AS_ON_DATE: 'Balance As On Date',
ACCOUNT_TYPE: 'Account Type',
TRADER_ACCOUNT: 'Trader Account',
CUSTOMER_ACCOUNT: 'Customer Account',
SUPPLIER_ACCOUNT: 'Supplier Account',

SALE_TYPE: 'Sale Type',

REFERENCE_CODE: 'Reference Code',
REPORT_CODE: 'Report Code',
REFERENCE_DATE: 'Reference Date',
REPORT_DATE: 'Report Date',
START_CODE: 'Start Code',



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
