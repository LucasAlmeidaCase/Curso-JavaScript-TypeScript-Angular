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
  public ofertas: Oferta[] = [];

  public dataTeste: any = new Date(2024, 6, 31);

  constructor(private ofertasService: OfertasService) {}

  ngOnInit() {
    this.ofertasService
      .getOfertasPorCategoria('restaurante')
      .then((ofertas: Oferta[]) => {
        this.ofertas = ofertas;
      });
  }
}
