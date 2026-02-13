import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { LanguageService } from './services/lang';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('vscode');

  constructor(public lang: LanguageService) {
    // Language will be loaded from localStorage if available
  }

  setLanguage(language: 'en' | 'mr') {
    this.lang.setLang(language);
  }

  getCurrentLanguage() {
    return this.lang.getLang();
  }
}
