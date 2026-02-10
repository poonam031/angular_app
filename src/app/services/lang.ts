import { Injectable } from '@angular/core';

/* 1️⃣ Allowed languages */
export type Lang = 'mr' | 'en';

/* 2️⃣ Allowed translation keys */
export type TranslationKey =
  | 'MASTER'
  | 'REPORT'
  | 'IMPORT_INFO'
  | 'MEMBER_INFO'
  | 'ADVISOR_INFO'
  | 'GRAIN_DEMAND'
  | 'GRAIN_INWARD'
  | 'CASH_SALE'
  | 'CREDIT_SALE'
  | 'DEPOSIT'
  | 'LANGUAGE';

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
      IMPORT_INFO: 'आयात माहिती',
      MEMBER_INFO: 'समासद माहिती',
      ADVISOR_INFO: 'सल्लागार माहिती',
      GRAIN_DEMAND: 'धान्य मागणी',
      GRAIN_INWARD: 'धान्य आवक',
      CASH_SALE: 'रोख विक्री व्यवहार',
      CREDIT_SALE: 'उधार विक्री व्यवहार',
      DEPOSIT: 'जमा व्यवहार',
      LANGUAGE: 'भाषा'
    },
    en: {
      MASTER: 'Master',
      REPORT: 'Report',
      IMPORT_INFO: 'Import Info',
      MEMBER_INFO: 'Member Info',
      ADVISOR_INFO: 'Advisor Info',
      GRAIN_DEMAND: 'Grain Demand',
      GRAIN_INWARD: 'Grain Inward',
      CASH_SALE: 'Cash Sale',
      CREDIT_SALE: 'Credit Sale',
      DEPOSIT: 'Deposit',
      LANGUAGE: 'Language'
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
