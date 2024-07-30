import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Observable, Subject, debounceTime, distinctUntilChanged, of, switchMap } from 'rxjs';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrl: './topo.component.css',
  providers: [OfertasService],
})
export class TopoComponent implements OnInit {
  public ofertas!: Observable<Oferta[]>;
  private subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(private ofertasService: OfertasService) {}

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa.pipe(
      debounceTime(1000), // executa a ação do switchMap após 1 segundo
      distinctUntilChanged(),
      switchMap((termo: string) => {
        console.log('requisição http para api');

        if (termo.trim() === '') {
          // retornar um observable de array de ofertas vazio
          return of<Oferta[]>([]);
        }
        return this.ofertasService.pesquisaOfertas(termo);
      })
    );

    this.ofertas.subscribe((ofertas: Oferta[]) => console.log(ofertas));
  }

  public pesquisa(termoDaBusca: string): void {
    console.log('keyup caracter: ', termoDaBusca);
    this.subjectPesquisa.next(termoDaBusca);
  }
}
