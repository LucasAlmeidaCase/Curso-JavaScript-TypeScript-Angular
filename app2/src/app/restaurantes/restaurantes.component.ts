import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrl: './restaurantes.component.css',
  providers: [OfertasService],
})
export class RestaurantesComponent implements OnInit {
  constructor(private ofertasService: OfertasService) {}

  ngOnInit() {
    this.ofertasService
      .getOfertasPorCategoria('restaurante')
      .then((ofertas: Oferta[]) => {
        console.log(ofertas);
      });
  }
}
