import { Component, inject, signal } from '@angular/core';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private router = inject(Router);

  email = signal<string>('');
  contrasena= signal<string>('');

  async handleLogin(){
    try{
      await signInWithEmailAndPassword(auth,
        this.email(), this.contrasena()
      )
      this.router.navigate(['/tareas'])
     
    }catch(error: any){
      alert(error.message);
    }
  }

}
