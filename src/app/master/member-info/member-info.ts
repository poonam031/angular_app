import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/lang';

@Component({
  selector: 'app-member-info',
  templateUrl: './member-info.html',
  styleUrls: ['./member-info.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class MemberInfoComponent {

  constructor(public lang: LanguageService) {}

  @Output() closed = new EventEmitter<void>();

  // Form Fields
  memberCode: string = '00006';
  memberName: string = 'श्री गणेश आबासाहेब बापुसा';
  mobileNumber: string = '';
  memberNumber: string = '00006';
  gender: string = 'male'; // male / female

  // Buttons
  onNew() {
    this.memberCode = '';
    this.memberName = '';
    this.mobileNumber = '';
    this.memberNumber = '';
    this.gender = 'male';
  }

  onEdit() {
    console.log('Edit Member');
  }

  onDelete() {
    console.log('Delete Member');
  }

  onPrint() {
    window.print();
  }

  onClose() {
    this.closed.emit();
  }
}
