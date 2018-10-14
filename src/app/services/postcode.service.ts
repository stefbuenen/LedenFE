import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Postcode } from '../domain/postcode.model';

//Deze httpOptions geven aan dat het Content-Type van de data die we versturen json is.
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})


export class PostcodeService {

  private url: string = "http://localhost:8082/api";
  private endpoint: string = "postcode";

  constructor(private httpClient: HttpClient) { }

  get(): Observable<Postcode[]> {
    return this
      .httpClient
      // .get<Postcode[]>("http://localhost:8082/api/postcode" )
      .get<Postcode[]>(`${this.url}/${this.endpoint}` )
  }


  //Method om een post request te sturen naar  endpoint. 
  //De create endpoint geeft als response het id van het nieuwe object. Deze methods returned dat id.
  add(pcd: Postcode): Observable<number>{
    return this
      .httpClient
      .post<number>(
          "http://localhost:8082/api/postcode", 
          pcd, 
          httpOptions)
      // .pipe();
  }

  //method om een PUT (update) request naar endpoint te versturen.
  //parameters: de URL zelf met het id aan het einde, het kandidaat object zelf, en de httpOptions
  update(pcd: Postcode) : Observable <Postcode> {
      console.log(pcd);
      return this
        .httpClient
        .put<Postcode>(
          "http://localhost:8082/api/postcode/"+pcd.id, 
          pcd, 
          httpOptions)
      // .pipe
    }


  //method voor de DELETE request.
  delete(id: number) : Observable<{}> {
    return this
      .httpClient
      .delete(
          "http://localhost:8082/api/postcode/"+id)
      // .pipe();
  }
}
