import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Oferta } from './shared/oferta.model';
import { firstValueFrom } from 'rxjs';
import { URL_API } from './app.api';

@Injectable()
export class OfertasService {

  // private url_api = 'http://localhost:3000/ofertas';

  constructor(private http: HttpClient) {}

  public getOfertas(): Promise<Oferta[]> {
    // efetuar uma requisição http
    return firstValueFrom(
      this.http.get(`${URL_API}?destaque=true`))
      .then((resposta: any) => resposta);
    // retornar uma Promise Oferta[]
  }

  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    return firstValueFrom(
      this.http.get(`${URL_API}?categoria=${categoria}`))
      .then((resposta: any) => resposta);
  }

  public getOfertaPorId(id: number): Promise<Oferta> {
    return firstValueFrom(
      this.http.get(`${URL_API}?id=${id}`))
      .then((resposta: any) => {
      return resposta[0];
    });
  }
}
