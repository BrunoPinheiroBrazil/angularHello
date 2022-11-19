import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  public contador : number = 0;

  increment() : void{
    this.contador++;
  }

  decrement() : void{
    this.contador--;
  }
}
