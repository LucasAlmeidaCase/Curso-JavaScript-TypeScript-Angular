import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service';
import { Pedido } from '../shared/pedido.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService],
})
export class OrdemCompraComponent implements OnInit {
  /* FormControl aceita 3 parâmetros opcionais:
  1 - Valor inicial do campo
  2 - Array de validadores
  3 - Array de validadores assíncronos
  */
  public formulario: FormGroup = new FormGroup({
    endereco: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(120),
    ]),
    numero: new FormControl(null, [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(20),
    ]),
    complemento: new FormControl(null),
    formaPagamento: new FormControl(null, Validators.required),
  });

  constructor(private ordemCompraService: OrdemCompraService) {}
  ngOnInit() {}

  public confirmarCompra(): void {
    console.log(this.formulario);
  }
}
