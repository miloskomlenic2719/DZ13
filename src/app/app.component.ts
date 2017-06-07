import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-app',
  templateUrl: 'template.html',
})
export class AppComponent implements OnInit {
  router: Router;
  isAuth: String;
  currentUrl: String;

  constructor(router: Router) {
    this.router = router;
    this.currentUrl = '';
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (localStorage.getItem('token') !== null){
        this.isAuth = 'yes';
      } else {
        this.isAuth = 'no';
      }
    });
  }
  onLogout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['./']);

    if (localStorage.getItem('token') !== null) {
      this.isAuth = 'yes';
    } else {
      this.isAuth = 'no';
    }
  }
}


