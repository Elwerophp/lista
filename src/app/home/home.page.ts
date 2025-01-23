import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})


export class HomePage {
  lista: { id: number, nombre: string, fecha: string, completado: boolean }[] = [];
  nextId: number = 1;
  nombre: string = '';
  fecha: string = '';

  constructor(public navCtrl: NavController) { }

  guardar(): void {
    if (this.nombre.trim() && this.fecha.trim()) {
      this.lista.push({
        id: this.nextId++,
        nombre: this.nombre.trim(),
        fecha: this.fecha.trim(),
        completado: false
      });
      this.nombre = '';
      this.fecha = '';
    } else {
      alert('El nombre y la fecha no pueden estar vacías');
    }
  }

  eliminar(id: number): void {
    this.lista = this.lista.filter(item => item.id !== id);
    this.reasignarIds();
  }

  reasignarIds(): void {
    this.lista.forEach((item, index) => {
      item.id = index + 1;
    });
    this.nextId = this.lista.length + 1;
  }
}