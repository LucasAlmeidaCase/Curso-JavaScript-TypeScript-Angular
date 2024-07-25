import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { Observable, Observer, interval } from 'rxjs';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrl: './oferta.component.css',
  providers: [OfertasService],
})
export class OfertaComponent implements OnInit {
  public oferta!: Oferta;

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) {}

  ngOnInit(): void {
    this.ofertasService
      .getOfertaPorId(this.route.snapshot.params['id'])
      .then((oferta: Oferta) => {
        this.oferta = oferta;
        // console.log(this.oferta);
      });
    // this.route.params.subscribe((parametro: any) => {
    //   console.log(parametro.id);
    // });

    // this.route.params.subscribe({
    //   next: (v) => console.log(v),
    //   error: (e) => console.log(e),
    //   complete: () => console.log('Processamento foi classificado como concluído'),
    // });

    // let tempo = interval(2000);

    // tempo.subscribe((intervalo: number) => {
    //   console.log(intervalo);
    // });

    // observable (observável)
    let meuObservableTeste = new Observable((observer: Observer<number>) => {
      observer.next(1);
      observer.next(3);
    });

    // observable (observador)
    meuObservableTeste.subscribe((resultado: number) =>
      console.log(resultado + 10)
    );
  }
}
