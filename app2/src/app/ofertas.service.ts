import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Oferta } from './shared/oferta.model';
import { Observable, firstValueFrom, map, retry } from 'rxjs';
import { URL_API } from './app.api';

@Injectable()
export class OfertasService {
  // private url_api = 'http://localhost:3000/ofertas';

  constructor(private http: HttpClient) {}

  public getOfertas(): Promise<Oferta[]> {
    // efetuar uma requisição http
    return firstValueFrom(
      this.http.get(`${URL_API}/ofertas?destaque=true`)
    ).then((resposta: any) => resposta);
    // retornar uma Promise Oferta[]
  }

  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    return firstValueFrom(
      this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
    ).then((resposta: any) => resposta);
  }

  public getOfertaPorId(id: number): Promise<Oferta> {
    return firstValueFrom(this.http.get(`${URL_API}/ofertas?id=${id}`)).then(
      (resposta: any) => {
        return resposta[0];
      }
    );
  }

  public getComoUsarOfertaPorId(id: number): Promise<string> {
    return firstValueFrom(this.http.get(`${URL_API}/como-usar?id=${id}`)).then(
      (resposta: any) => {
        return resposta[0].descricao;
      }
    );
  }

  public getOndeFicaOfertaPorId(id: number): Promise<string> {
    return firstValueFrom(this.http.get(`${URL_API}/onde-fica?id=${id}`)).then(
      (resposta: any) => {
        return resposta[0].descricao;
      }
    );
  }

  public pesquisaOfertas(termo: string): Observable<Oferta[]> {
    return this.http.get<Oferta[]>(`${URL_API}/ofertas/?descricao_oferta_like=${termo}`)
      .pipe(
        map((resposta: Oferta[]) => resposta.filter(oferta => oferta.descricao_oferta.toLowerCase().includes(termo.toLowerCase()))),
        retry(10)
      );
  }
}
