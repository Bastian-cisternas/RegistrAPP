import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  user = {
    usuario: "",
    password: ""
  }
  
  field: string = ""
  constructor(private router: Router, public toastController: ToastController) { } 

  ngOnInit() {
  }
  ingresar() {
    if (this.validateModel(this.user)) {
      this.presentToast("Bienvenido")
     
      let navigationExtras: NavigationExtras = {
        state: {
          user: this.user 
        }
      };
      this.router.navigate(['/home'], navigationExtras); 
    }
    else{
      this.presentToast("Falta ingresar "+this.field,5000)
    }
  }

  
  validateModel(model: any) {
    
    for (var [key, value] of Object.entries(model)) {
      
      if (value == "") {
        this.field = key;
        return false;
      }
    }
    return true;
  }

  async presentToast(msg: string, duracion?: number) {
    const toast = await this.toastController.create({
      message: msg,
      duration: duracion ? duracion : 2000
    });
    toast.present();
  }

}
