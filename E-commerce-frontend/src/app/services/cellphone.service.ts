import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Cellphone } from '../common/cellphone';
import { CellphoneListComponent } from '../components/cellphone-list/cellphone-list.component';
import { Spec } from '../common/spec';
import { MessagesService } from './messages.service';


@Injectable({
  providedIn: 'root'
})
export class CellphoneService {

  private baseUrl= "http://localhost:8080/api/v1/cellphones";
  private createUrl= "http://localhost:8080/cellphone"
  
  // httpOptions = {
  //   headers: new HttpHeaders({ 'Cellphone': 'application/json' })
  // };

  constructor(
    private _http: HttpClient,
    private messageService: MessagesService) { }



  getCellphonesList(): Observable<Cellphone[]>{
    return this._http.get<GetResponseCellphones>(this.baseUrl).pipe(
      map(response => response._embedded.cellphones)
    );
  
  }

  createCellphone(cellphone: Cellphone): Observable<Object>{
    return this._http.post(`${this.createUrl}/add`, cellphone);
  }

  getCellphoneById(theCellphoneId: string): Observable<any>{
    const searchUrl = `${this.baseUrl}/search/cellphone?id=${theCellphoneId}`;
    return this._http.get<GetResponseCellphones>(searchUrl).pipe(
      map(response => response._embedded.cellphones)
    )
  }

  updateCellphone(id: string, cellphone: Cellphone): Observable<Object>{
    return this._http.put(`${this.baseUrl}/${id}`, cellphone);
  }

  deleteCellphone(id: string): Observable<Object>{
    return this._http.delete(`${this.baseUrl}/${id}`);
  }
}


interface GetResponseCellphones{
  _embedded: {
    cellphones: Cellphone[];
  }
}