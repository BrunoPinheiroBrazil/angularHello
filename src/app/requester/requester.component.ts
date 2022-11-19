import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { addressDto } from '../models/AddressDto.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-requester',
  templateUrl: './requester.component.html',
  styleUrls: ['./requester.component.css']
})
export class RequesterComponent {
  
  private addressUrl = 'https://viacep.com.br/ws';  // URL to web api
  public cep = "";
  public response = "";

  constructor(
    private http : HttpClient
  ){}

  getAddress() {
    console.log("Clicou");
    let getUrl = this.addressUrl + "/" + this.cep + "/json/";
    this.http.get<addressDto>(getUrl).subscribe(res => {
      this.response = JSON.stringify(res);
    });
  }
}
