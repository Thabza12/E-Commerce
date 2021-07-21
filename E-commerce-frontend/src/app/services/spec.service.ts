import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Spec } from '../common/spec';



@Injectable({
  providedIn: 'root'
})
export class SpecService {

  private specUrl= "http://localhost:8080/api/v1/specs/";
  private cellUrl= "http://localhost:8080/api/v1/cellphones/"

  constructor(private httpClient: HttpClient) { }

  getSpec(id: number): Observable<any> {
    return this.httpClient.get(`${this.cellUrl}/${id}/spec`);
  }

  createSpec(cellphone: Object): Observable<Object> {
    return this.httpClient.post(`${this.specUrl}`, cellphone);
  }

  updateSpec(id: number, value: any): Observable<Object> {
    return this.httpClient.put(`${this.specUrl}/${id}`, value);
  }

  deleteSpec(id: number): Observable<any> {
    return this.httpClient.delete(`${this.specUrl}/${id}`, { responseType: 'text' });
  }

  getSpecs(): Observable<any> {
    return this.httpClient.get(`${this.specUrl}`);
  }

  // getSpecs(): Observable<Spec[]>{
  //   return this.httpClient.get<GetResponseSpecs>(this.specUrl).pipe(
  //     map(response => response._embedded.specs)
  //   ) 
  // }
}

interface GetResponseSpecs{
  _embedded:{
    specs: Spec[];
  }
}
