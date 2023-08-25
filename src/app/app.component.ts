import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'projeto-mateus';

  log_email: string = ''
  log_password: string = ''
  reg_email: string = ''
  reg_password: string = ''
  reg_cofirm_password: string = ''

  login() { 
    if (this.log_email == "admin" && this.log_password == "nimda") {
      
    } else {
      
    }
  }
  register(){}
}


