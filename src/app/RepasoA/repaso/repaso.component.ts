import { Component } from '@angular/core';

@Component({
  selector: 'app-repaso',
  templateUrl: './repaso.component.html',
  styleUrls: ['./repaso.component.css']
})
export class RepasoComponent {
  constructor(){}

  ngOnInit(){}

  border = 3;

  art={
    codigo:0,
    descripcion:"",
    precio:0
  }

  articulos : IArt[] = [{codigo:1, descripcion:"papas", precio:10.25},
              {codigo:2, descripcion:"peras", precio:12.25},
              {codigo:3, descripcion:"manzanas", precio:9.63},
              {codigo:4, descripcion:"melon", precio:14.00},
              {codigo:5, descripcion:"cebollas", precio:8.02}
              ];
  hayRegistros(){
    return this.articulos.length>0;
  }

  borrar(art : IArt){
    for (let index = 0; index < this.articulos.length; index++) {
        if (this.articulos[index].codigo == art.codigo) {
          this.articulos.splice(index,1);
          return;
        }
    }
  }

  agregar(){
    for (let i = 0; i < this.articulos.length; i++) 
      if (this.articulos[i].codigo == this.art.codigo) {
        alert("ya existe ese código");
        return;
      }
      this.articulos.push({codigo:this.art.codigo,
                          descripcion: this.art.descripcion,
                          precio: this.art.precio});
      this.art.codigo = 0;
      this.art.descripcion = "defecto";
      this.art.precio = 0;
    
  }

  seleccionar(art: IArt){
    this.art.codigo = art.codigo;
    this.art.descripcion = art.descripcion;
    this.art.precio = art.precio;
  }

  modificar(){
    for (let i = 0; i < this.articulos.length; i++) 
        if (this.articulos[i].codigo == this.art.codigo) {
          this.articulos[i].descripcion = this.art.descripcion;
          this.articulos[i].precio = this.art.precio;
          return;
        }
        alert('No existe el código del artículo');
      
    
  }
}

interface IArt{
  codigo:number
  descripcion:string
  precio: number
}
