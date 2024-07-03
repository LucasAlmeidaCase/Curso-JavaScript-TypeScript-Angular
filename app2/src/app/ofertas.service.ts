import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Oferta } from './shared/oferta.model';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class OfertasService {
  constructor(private http: HttpClient) {}

  public getOfertas(): Promise<Oferta[]> {
    // efetuar uma requisição http
    return firstValueFrom(this.http.get('http://localhost:3000/ofertas')).then(
      (resposta: any) => resposta
    );
    // retornar uma Promise Oferta[]
  }
}
