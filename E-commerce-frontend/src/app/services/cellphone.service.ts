import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cellphone } from '../common/cellphone';


@Injectable({
  providedIn: 'root'
})
export class CellphoneService {

  private baseUrl= "http://localhost:8080/api/v1/cellphones";

  constructor(private httpClient: HttpClient) { }

  getCellphones(): Observable<Cellphone[]>{
    return this.httpClient.get<GetResponseCellphones>(this.baseUrl).pipe(
      map(response => response._embedded.cellphones)
    )
  }
}

interface GetResponseCellphones{
  _embedded:{
    cellphones: Cellphone[];
  }
}
