import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor(private snackBar: MatSnackBar) {}
  title = 'projeto-mateus';

  log_email: string = ''
  log_password: string = ''
  reg_email: string = ''
  reg_password: string = ''
  reg_cofirm_password: string = ''

  login() { 
    if (this.log_email == "admin" && this.log_password == "nimda") {
      this.snackBar.open('Login realizado com sucesso', 'Fechar',{
        duration: 3000, // Duração em milissegundos
        horizontalPosition: 'center',
        verticalPosition: 'bottom'})
    } else {
      this.snackBar.open('Dados inválidos', 'Fechar',{
        duration: 3000, // Duração em milissegundos
        horizontalPosition: 'center',
        verticalPosition: 'bottom'})
    }
  }
  register(){}
}


