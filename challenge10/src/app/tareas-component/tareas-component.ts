import { Component, inject, signal } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import { Tareas } from '../services/tareas';
import { Supabase } from '../services/supabase';
import { FormsModule } from '@angular/forms';
import { RealtimeChannel } from '@supabase/supabase-js';

@Component({
  selector: 'app-tareas-component',
  imports: [FormsModule],
  templateUrl: './tareas-component.html',
  styleUrl: './tareas-component.css',
})
export class TareasComponent implements OnInit, OnDestroy {
  protected srv = inject(Tareas);
  private sb = inject(Supabase).client;
  private canal?: RealtimeChannel;

  tareas = signal<any[]>([]); 
  nueva = '';
  url = signal('');

  async ngOnInit(){
    await this.cargar(); 
    this.canal = this.srv.escuchar(()=> this.cargar());
  }

  async cargar(){
    const {data} = await this.srv.listar();
    this.tareas.set(data ?? []);
  }

  async agregar(){
    await this.srv.crear(this.nueva);
    this.nueva = '';
  }

  async borrar(id: number){
    const {error} = await this.srv.borrar(id);
    if (error) return alert(error.message);
    await this.cargar();
  }

  async completar(id: number, valor:boolean){
    const {error} = await this.srv.borrar(id);
    if (error) return alert(error.message);
    await this.cargar();
  }

  async subir(e: Event){
    const file = (e.target as HTMLInputElement).files?.[0];
    if (!file) return; 

    const {data: {user}} = await this.sb.auth.getUser();

    const ruta = `${user!.id}/${Date.now()}-${file.name}`;

    const {error} = await this.sb.storage.from('archivos').update(ruta, file, {upsert: true});

    if (error){
      return alert(error.message);
    }

    this.url.set(this.sb.storage.from('archivos').getPublicUrl(ruta).data.publicUrl);
  }

  ngOnDestroy(){
    if (this.canal){
      this.sb.removeChannel(this.canal);
    }
  }
}
