import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cellphone } from '../common/cellphone';
import { CellphoneListComponent } from '../components/cellphone-list/cellphone-list.component';


@Injectable({
  providedIn: 'root'
})
export class CellphoneService {

  private baseUrl= "http://localhost:8080/api/v1/cellphones";
  

  constructor(private httpClient: HttpClient) { }

  getCellphones(theSpecId: number): Observable<Cellphone[]>{
    const searchUrl = `${this.baseUrl}/search/spec-id?id=${theSpecId}`
    return this.httpClient.get<GetResponseCellphones>(searchUrl).pipe(
      map(response => response._embedded.cellphones)
    )
  }
}

interface GetResponseCellphones{
  _embedded:{
    cellphones: Cellphone[];
  }
}
