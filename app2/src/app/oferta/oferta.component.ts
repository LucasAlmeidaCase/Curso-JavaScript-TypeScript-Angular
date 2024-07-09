import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrl: './oferta.component.css',
})
export class OfertaComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log('ID recuperado da rota: ', this.route.snapshot.params['id']);
    // this.route.params.subscribe((parametro: any) => {
    //   console.log(parametro.id);
    // });
  }
}
