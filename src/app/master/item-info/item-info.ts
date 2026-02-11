import { Component, EventEmitter, Output } from '@angular/core';
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

  constructor(public lang: LanguageService) {}

  @Output() closed = new EventEmitter<void>();

  formFields: FormField[] = [
    { label: 'ITEM_ID', value: '' },
    { label: 'ITEM_NAME', value: '' },
    { label: 'QUANTITY_QTL', value: '' },
    { label: 'QUALITY_GRADE', value: '' },
    { label: 'SUPPLIER_NAME', value: '' },
    { label: 'REMARKS', value: '' }
  ];

  clear() {
    this.formFields.forEach(f => f.value = '');
  }

  close() {
    this.closed.emit();
  }
}
