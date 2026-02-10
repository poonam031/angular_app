import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../services/lang';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class Dashboard {

  constructor(public lang: LanguageService) {}

  switchLang(l: 'mr' | 'en') {
    this.lang.setLang(l);
  }

  activeTab: 'master' | 'report' = 'master';

  setTab(tab: 'master' | 'report') {
    this.activeTab = tab;
  }
}
