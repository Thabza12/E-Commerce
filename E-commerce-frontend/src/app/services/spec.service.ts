import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Spec } from '../common/spec';



@Injectable({
  providedIn: 'root'
})
export class SpecService {

  private baseUrl= "http://localhost:8080/api/v1/specs/";

  constructor(private httpClient: HttpClient) { }

  getSpecs(): Observable<Spec[]>{
    return this.httpClient.get<GetResponseSpecs>(this.baseUrl).pipe(
      map(response => response._embedded.specs)
    ) 
  }
}

interface GetResponseSpecs{
  _embedded:{
    specs: Spec[];
  }
}
