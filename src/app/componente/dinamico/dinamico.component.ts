import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dinamico',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './dinamico.component.html',
  styleUrl: './dinamico.component.css'
})
export class DinamicoComponent implements OnInit {

  nombre:string = 'Daniel';


  constructor(){

  }


  ngOnInit(): void {
      
  }

cambiarNombre(){
  this.nombre = 'Genario';
}

numero = 0;
Sumar() {
  this.numero = this.numero + 1;
}

array= [1, 2, 3, 4, 5, 6, 7]
agregar(){
  this.array.push(Math.random());
}

}
