import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/lang';

@Component({
  selector: 'app-grain-demand',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './grain-demand.html',
  styleUrls: ['./grain-demand.css']
})
export class GrainDemandComponent {
  @Output() closed = new EventEmitter<void>();

  constructor(public lang: LanguageService) {}

  /* =========================
     FORM MODEL
  ========================== */
  form = {
    godownCode: '001',
    godownName: 'डि-टी',
    demandNo: '156',
    year: '2025-2026',
    date: '2025-06-23',
    memberCode: '1002',
    memberName: 'मिलिंद विनायक रामाडे',
    city: 'Kolhapur'
  };

  /* =========================
     DROPDOWN DATA
  ========================== */

  godowns = [
    { code: '001', name: 'डि-टी' },
    { code: '002', name: 'मुख्य गोदाम' },
    { code: '003', name: 'पूर्व गोदाम' }
  ];

  members = [
    { code: '1001', name: 'अमोल पाटील' },
    { code: '1002', name: 'मिलिंद विनायक रामाडे' },
    { code: '1003', name: 'राजेश देशमुख' }
  ];

  demandNumbers = ['156', '157', '158', '159'];

  /* =========================
     ITEMS LIST
  ========================== */

  items = [
    { code: '00001', name: 'गहू (30 किलो पॅक)', qty: 0 },
    { code: '00002', name: 'ज्वारी (30 किलो पॅक)', qty: 0 },
    { code: '00003', name: 'तांदूळ (30 किलो पॅक)', qty: 0 },
    { code: '00004', name: 'तांदूळ - उच्च प्रतीचा 30 किलो पॅक', qty: 0 },
    { code: '00005', name: 'तांदूळ - मध्यम प्रतीचा 10 किलो पॅक', qty: 0 },
    { code: '00006', name: 'सूर्यफूल तेल (15 किलो पॅक डबा)', qty: 0 },
    { code: '00007', name: 'हरभरा डाळ एग्रो (10 किलो पॅक)', qty: 0 },
    { code: '00008', name: 'मूगडाळ (5 किलो पॅक)', qty: 0 }
  ];

  totalQty: number = 0;

  /* =========================
     DROPDOWN CHANGE HANDLERS
  ========================== */

  onGodownChange(code: string) {
    const selected = this.godowns.find(g => g.code === code);
    this.form.godownName = selected?.name || '';
  }

  onMemberChange(code: string) {
    const selected = this.members.find(m => m.code === code);
    this.form.memberName = selected?.name || '';
  }

  /* =========================
     TOTAL CALCULATION
  ========================== */

  calculateTotal() {
    this.totalQty = this.items.reduce(
      (sum, item) => sum + Number(item.qty || 0),
      0
    );
  }

  /* =========================
     BUTTON ACTIONS
  ========================== */

  onNew() {
    this.items.forEach(i => i.qty = 0);
    this.calculateTotal();
  }

  onEdit() {
    console.log('Edit grain demand');
  }

  onDelete() {
    if (confirm('क्या आप इस मांग को हटाना चाहते हैं?')) {
      console.log('Grain demand deleted');
      this.onNew();
    }
  }

  onPrint() {
    console.log('Printing grain demand...');
    window.print();
  }

  onSave() {
    console.log('Saved Data:', {
      form: this.form,
      items: this.items
    });
  }

  onClose() {
    this.closed.emit();
  }
}
