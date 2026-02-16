import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/lang';

@Component({
  selector: 'app-item-info',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './item-info.html',
  styleUrls: ['./item-info.css']
  
})

export class ItemInfoComponent implements OnInit {
  @Output() closed = new EventEmitter<void>();

  constructor(public lang: LanguageService) {}

  ngOnInit(): void {}

  item = {
    code: '00001',
    name: 'गहू (३० किलो पॅक)',
    weight: 30,
    limit: 17,
    cashRate: 1020,
    creditRate: 1090,
    unit: '1'
  };

  onNew() {
    this.item = {
      code: '',
      name: '',
      weight: 0,
      limit: 0,
      cashRate: 0,
      creditRate: 0,
      unit: '1'
    };
  }

  clear() {
    this.onNew();
  }

  onEdit() {
    console.log('Editing item:', this.item);
  }

  onDelete() {
    if (confirm(this.lang.t('DELETE') + ' - ' + this.item.name + '?')) {
      this.onNew();
    }
  }

  onPrint() {
    window.print();
  }

  onClose() {
    this.closed.emit();
  }
}
