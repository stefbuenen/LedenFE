import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Lid } from '../domain/lid.model';

//Deze httpOptions geven aan dat het Content-Type van de data die we versturen json is.
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LidService {

  private url: string = "http://localhost:8082/api";
  private endpoint: string = "lid";

  constructor(private httpClient: HttpClient) { }

  get(): Observable<Lid[]> {
    return this
      .httpClient
      // .get<Lid[]>("http://localhost:8082/api/lid" )
      .get<Lid[]>(`${this.url}/${this.endpoint}` )
  }

}
