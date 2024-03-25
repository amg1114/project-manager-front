import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {
      const loggedUser = this.authService.getLoggedUser();
      if (!loggedUser) {
          this.router.navigate(['/login']);
      }
  }
}
