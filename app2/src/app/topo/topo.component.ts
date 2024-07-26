import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrl: './topo.component.css'
})
export class TopoComponent implements OnInit{

  constructor() {}

  ngOnInit(): void {
  }

  public pesquisa(termoDaBusca: string): void {
    console.log(termoDaBusca)
  }
}
