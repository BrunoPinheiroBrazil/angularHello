import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit{
  
  @Input() nome: string = 'CDFs';
  public nomeAtual : string = '';

  constructor(){}

  ngOnInit(): void {
    if(this.nomeAtual != "Você clicou aqui chicomori")
      this.nomeAtual = "Você clicou aqui chicomori"!
    else
      this.nomeAtual = this.nome;
  }

  clicked (): void{
    if(this.nomeAtual != "Você clicou aqui chicomori")
      this.nomeAtual = "Você clicou aqui chicomori"!
    else
      this.nomeAtual = this.nome;
  }
}
