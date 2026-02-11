import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demand-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './demand-register.html',
  styleUrls: ['./demand-register.css'],
})
export class DemandRegisterComponent {}
