import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  constructor(private router: Router) {}

  goToAbout() {
    this.router.navigate(['/sregister']); 
  }

  goToUSign() {
    this.router.navigate(['/usignup']); 
  }

  goToSLogin() {
    this.router.navigate(['/slogin']); 
  }

  goToULogin() {
    this.router.navigate(['/ulogin']); 
  }
}
