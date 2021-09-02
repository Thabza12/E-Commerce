import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cellphone } from '../common/cellphone';
import { MessagesService } from './messages.service';


@Injectable({
  providedIn: 'root'
})
export class CellphoneService {

  private baseUrl= "http://localhost:8080/api/v1/cellphones";

  constructor(
    private _http: HttpClient,
    private messageService: MessagesService) { }


  getCellphonesList(theSpecId: number): Observable<Cellphone[]>{
    const searchUrl = `${this.baseUrl}/search/cellphone?id=${theSpecId}`;
    return this.getCellphones(searchUrl);
  
  }

  private getCellphones(searchUrl: string): Observable<Cellphone[]> {
    return this._http.get<GetResponseCellphones>(this.baseUrl).pipe(
      map(response => response._embedded.cellphones)
    );
  }

  searchCellphone(keyword: string): Observable<Cellphone[]>{
    const searchUrl = `${this.baseUrl}/search/search-model?modelName?=${keyword}`;
    return this.getCellphones(searchUrl);
  
  }

  // getCellphoneById(theCellphoneId: number): Observable<any>{
  //   const searchUrl = `${this.baseUrl}/search/cellphone?id=${theCellphoneId}`;
  //   return this._http.get<GetResponseCellphones>(searchUrl).pipe(
  //     map(response => response._embedded.cellphones)
  //   )
  // }

  createCellphone(cellphone: Cellphone): Observable<Object>{
    return this._http.post(`${this.baseUrl}/add`, cellphone);
  }

  updateCellphone(id: number, cellphone: Cellphone): Observable<Object>{
    return this._http.put(`${this.baseUrl}/${id}`, cellphone);
  }

  deleteCellphone(id: number): Observable<Object>{
    return this._http.delete(`${this.baseUrl}/${id}`);
  }
}


interface GetResponseCellphones{
  _embedded: {
    cellphones: Cellphone[];
  }
}