import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  imports: [NavbarComponent]
})
export class AdminComponent {
  constructor(private router: Router) {

  }

  formAdd() {
    this.router.navigate(['/formPerson']);
  }
  formAddAuthor() {
    this.router.navigate(['/formAuthor']);
  }
  formAddBook() {
    this.router.navigate(['/formBook']);
  }
}