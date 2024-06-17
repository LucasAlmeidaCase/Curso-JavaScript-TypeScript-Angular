import { Component, Input, OnInit } from '@angular/core';

import { Coracao } from 'app/shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrl: './tentativas.component.css',
})
export class TentativasComponent implements OnInit {
  @Input() public tentativas: number;

  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true),
  ];

  constructor() {
    console.log(this.coracoes);
  }

  ngOnInit() {
    console.log('tentativas recebidas do painel: ', this.tentativas);
  }
}
