import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Pedido } from './shared/pedido.model';
import { URL_API } from './app.api';
import { Observable, map } from 'rxjs';

@Injectable()
export class OrdemCompraService {
  constructor(private http: HttpClient) {}

  public efetivarCompra(pedido: Pedido): Observable<number> {
    return this.http
      .post(`${URL_API}/pedidos`, pedido)
      .pipe(map((resposta: any) => resposta.id));
  }
}
