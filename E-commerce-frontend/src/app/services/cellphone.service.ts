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
  private specUrl= "http://localhost:8080/api/v1/spec-view";
  
  httpOptions = {
    headers: new HttpHeaders({ 'Cellphone': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessagesService) { }



  /** GET cellphones from the server */

  getCellphonesList(): Observable<Cellphone[]> {
    const baseUrl= `${this.baseUrl}`
    return this.http.get<GetResponseCellphones>(this.baseUrl).pipe(
      map(response => response._embedded.cellphones)
    )
  }

  // getCellphones(): Observable<Cellphone[]> {
  //   return this.http.get<GetResponseCellphones>(this.baseUrl)
  //     .pipe(
  //       map(response => response._embedded.cellphones),
  //       tap(_ => this.log('fetched cellphones')),
  //       catchError(this.handleError<Cellphone[]>('getCellphones', []))
  //     );
  // }

  /** GET specs from the server */
  getSpecs(): Observable<Spec[]> {
    return this.http.get<GetResponseSpec>(this.specUrl)
      .pipe(
        map(response => response._embedded.specs),
        tap(_ => this.log('fetched specs')),
        catchError(this.handleError<Spec[]>('getSpecs', []))
      );
  }

  

  /** GET cellphone by id. Return `undefined` when id not found */
  getCellphoneNo404<Data>(theCellphoneId: number): Observable<Cellphone> {
    const url = `${this.baseUrl}/?id=${theCellphoneId}`;
    return this.http.get<Cellphone[]>(url)
      .pipe(
        map(cellphones => cellphones[1]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} cellphone id=${theCellphoneId}`);
        }),
        catchError(this.handleError<Cellphone>(`getCellphone id=${theCellphoneId}`))
      );
  }

  /** GET cellphone by id. Will 404 if id not found */
  getCellphone(theCellphoneId: number): Observable<Cellphone> {
    return this.http.get<Cellphone>(`${this.baseUrl}/${theCellphoneId}`);
  }

  /** GET spec by id. Will 404 if id not found */

  getSpec(theSpecId: number): Observable<Spec[]>{
      const specUrl =  `${this.specUrl}/?id=${theSpecId}`
      return this.http.get<GetResponseSpec>(this.specUrl).pipe(
        map(response => response._embedded.specs)
      )
    }

  // getspec(id: string){
  //   return this.http.get("http://localhost:8080/api/v1/specs"+id)
  //   .pipe(
  //     map(spec => spec)
  
  //   );
  // }
  // getSpec(id: string): Observable<Spec> {
  //   const url = `${this.specUrl}/${id}`;
  //   return this.http.get<Spec>(url).pipe(
  //     tap(_ => this.log(`fetched spec id=${id}`)),
  //     catchError(this.handleError<Spec>(`getSpec id=${id}`))
  //   );
  // }

  /* GET cellphones whose name contains search term */
  searchCellphones(term: string): Observable<Cellphone[]> {
    if (!term.trim()) {
      // if not search term, return empty cellphone array.
      return of([]);
    }
    return this.http.get<Cellphone[]>(`${this.baseUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found cellphones matching "${term}"`) :
         this.log(`no cellphones matching "${term}"`)),
      catchError(this.handleError<Cellphone[]>('searchCellphones', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new cellphone to the server */
  addCellphone(cellphone: Cellphone): Observable<Cellphone> {
    return this.http.post<Cellphone>(this.baseUrl, cellphone, this.httpOptions).pipe(
      tap((newCellphone: Cellphone) => this.log(`added cellphone w/ id=${newCellphone.id}`)),
      catchError(this.handleError<Cellphone>('addCellphone'))
    );
  }

  /** DELETE: delete the cellphone from the server */
  deleteCellphone(id: number): Observable<Cellphone> {
    const url = `${this.baseUrl}/${id}`;

    return this.http.delete<Cellphone>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted cellphone id=${id}`)),
      catchError(this.handleError<Cellphone>('deleteHero'))
    );
  }

  /** PUT: update the cellphone on the server */
  updateCellphone(cellphone: Cellphone): Observable<any> {
    return this.http.put(this.baseUrl, cellphone, this.httpOptions).pipe(
      tap(_ => this.log(`updated celllphone id=${cellphone.id}`)),
      catchError(this.handleError<any>('updateCellphone'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  

  // constructor(private httpClient: HttpClient) { }

  // getCellphone(id: number): Observable<Cellphone> {
  //   const url = `${this.baseUrl}/${id}`;
  //   return this.httpClient.get<Cellphone>(url).pipe(
  //   );
  // }
  

  // createCellphone(cellphone: Object): Observable<Object> {
  //   return this.httpClient.post(`${this.baseUrl}`, cellphone);
  // }

  // updateCellphone(id: number, value: any): Observable<Object> {
  //   return this.httpClient.put(`${this.baseUrl}/${id}`, value);
  // }

  // deleteCellphone(id: number): Observable<any> {
  //   return this.httpClient.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  // }

  // getCellphonesList(): Observable<Cellphone[]> {
  //   const baseurl = `${this.baseUrl}`
  //   return this.httpClient.get<GetResponseCellphones>(this.baseUrl).pipe(
  //     map(response => response._embedded.cellphones)
  //   )
  // }

  


  // getCellphones(theManufactureId: number  ): Observable<Cellphone[]>{
  //   const searchUrl = `${this.baseUrl}/search/manufacture-id?id=${theManufactureId}`
  //   return this.httpClient.get<GetResponseCellphones>(this.baseUrl).pipe(
  //     map(response => response._embedded.cellphones)
  //   )
  // }

  // getSpecs(theSpecId: number): Observable<Cellphone[]>{
  //   const searchUrl =  `${this.baseUrl}/search/spec-id?id=${theSpecId}`
  //   return this.httpClient.get<GetResponseCellphones>(this.baseUrl).pipe(
  //     map(response => response._embedded.cellphones)
  //   )
  // }

  // getSpec(id : string): Observable<Spec[]> {
  //   const specUrl= `${this.specUrl}/${id}`
  //   return this.httpClient.get<GetResponseSpec>(this.specUrl).pipe(
  //     map(response => response._embedded.specs)
  //   ) 
  // }

  // getCellphone(id: string): Observable<Cellphone[]>{
  //   const url = `${this.baseUrl}/${id}`
  //   return this.httpClient.get<GetResponseCellphones>(this.baseUrl).pipe(
  //     map(response => response._embedded.cellphones)
  //   )
  // }

  

  
}

interface GetResponseCellphones{
  _embedded:{
    cellphones: Cellphone[];
  }
}

interface GetResponseSpec{
  _embedded:{
    specs: Spec[];
  }
}
