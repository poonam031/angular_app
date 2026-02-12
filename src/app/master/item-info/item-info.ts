import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService, type TranslationKey } from '../../services/lang';

interface FormField {
  label: TranslationKey;
  value: string;
}

@Component({
  selector: 'app-item-info',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './item-info.html',
  styleUrls: ['./item-info.css']
})
export class ItemInfoComponent {
  // Declare all the fields you are binding in the template
  itemCode: string = '';
  itemName: string = '';
  weight: string = '';
  unitLimit: string = '';
  rateEach: string = '';
  purchaseRate: string = '';
  credit: string = '';

  constructor(public lang: LanguageService) {}

  clear(): void {
    this.itemCode = '';
    this.itemName = '';
    this.weight = '';
    this.unitLimit = '';
    this.rateEach = '';
    this.purchaseRate = '';
    this.credit = '';
  }

  close(): void {
    // Add logic to close the form or navigate away
  }
}
