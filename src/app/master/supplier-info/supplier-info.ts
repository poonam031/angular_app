import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/lang';

@Component({
  selector: 'app-supplier-info',
  templateUrl: './supplier-info.html',
  styleUrls: ['./supplier-info.css'],
  standalone: true,
  imports: [FormsModule]
})
export class SupplierInfoComponent {
  @Output() closed = new EventEmitter<void>();
  
  // Mock data for the fields
  supplierCode: string = '00001';
  supplierName: string = 'मे. अनिल बापूसा चौगुले';

  constructor(public lang: LanguageService) {}

  onNew() { 
    this.supplierCode = '';
    this.supplierName = '';
  }
  onEdit() { console.log('Edit Record'); }
  onDelete() { 
    if (confirm(this.lang.t('DELETE') + ' - ' + this.supplierName + '?')) {
      console.log('Record deleted');
    }
  }
  onPrint() { 
    console.log('Print button clicked');
    window.print(); 
  }
  onClose() { this.closed.emit(); }
}