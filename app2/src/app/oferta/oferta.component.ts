import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { Observable, Observer, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrl: './oferta.component.css',
  providers: [OfertasService],
})
export class OfertaComponent implements OnInit, OnDestroy {
  private tempoObservableSubscription!: Subscription;
  private meuObservableTesteSubscription!: Subscription;

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

    let tempo = interval(2000);

    this.tempoObservableSubscription = tempo.subscribe((intervalo: number) => {
      console.log(intervalo);
    });

    // observable (observável)
    let meuObservableTeste = new Observable((observer: Observer<number>) => {
      observer.next(1);
      observer.next(3);
      // observer.error('algum erro foi encontrado na stream de eventos');
      observer.complete();
      observer.next(3);
    });

    // observable (observador)
    this.meuObservableTesteSubscription = meuObservableTeste.subscribe({
      next: (v: number) => console.log(v + 10),
      error: (e) => console.log(e),
      complete: () => console.log('Stream de eventos foi finalizada'),
    });
  }

  ngOnDestroy(): void {
    this.meuObservableTesteSubscription.unsubscribe();
    this.tempoObservableSubscription.unsubscribe();
  }
}
