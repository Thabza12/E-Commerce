import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Spec } from '../common/spec';



@Injectable({
  providedIn: 'root'
})
export class SpecService {

  private specUrl= "http://localhost:8080/api/v1/specs";

  constructor(private _http: HttpClient) { }

  getSpecs(): Observable<Spec[]>{
    return this._http.get<GetResponseSpecs>(this.specUrl).pipe(
      map(response => response._embedded.specs)
    );
  
  }

  createSpec(spec: Spec): Observable<Object>{
    return this._http.post(`${this.specUrl}/add`, spec);
  }

  getSpecById(id: string): Observable<any>{
    const specViewUrl = `${this.specUrl}/search/spec-view-details?id=${id}`;
    return this._http.get<GetSpecResponse>(specViewUrl).pipe(
      map(response => response._embedded.spec)
    )
  }

  updateSpec(id: string, spec: Spec): Observable<Object>{
    return this._http.put(`${this.specUrl}/${id}`, spec);
  }

  deleteSpec(id: string): Observable<Object>{
    return this._http.delete(`${this.specUrl}/${id}`);
  }
}


interface GetResponseSpecs{
  _embedded: {
    specs: Spec[];
  }
}

interface GetSpecResponse{
  _embedded: {
    spec: Spec;
  }
}