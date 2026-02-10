import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // 1. Added Router import
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('shakeError', [
      state('normal', style({ transform: 'translateX(0)' })),
      state('error', style({ transform: 'translateX(0)' })),
      transition('normal => error', [
        animate('100ms', style({ transform: 'translateX(-10px)' })),
        animate('100ms', style({ transform: 'translateX(10px)' })),
        animate('100ms', style({ transform: 'translateX(-10px)' })),
        animate('100ms', style({ transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class LoginComponent {
  username = '';
  password = '';
  loginState = 'normal';

  // 2. Added constructor to inject the Router
  constructor(private router: Router) {}

  onLogin() {
    if (this.username === 'admin' && this.password === '1234') {
      this.router.navigate(['/dashboard']);
    } else {
      this.loginState = 'error';
      setTimeout(() => this.loginState = 'normal', 500);
    }
  }
}