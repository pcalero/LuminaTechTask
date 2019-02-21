import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Subtree } from '../models/subtree';
import { Tree } from '../models/tree';
import { Constants } from '../common/constants';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable({
  providedIn: 'root'
})
export class TreeOfLifeService {

  constructor(private http: HttpClient) { }

  /**
   * Returns a function that handles Http operation failures.
   * This error handler lets the app continue to run as if no error occurred.
   * @param serviceName = name of the data service that attempted the operation
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (serviceName = '',operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      console.error(error); // log to console

      const message = (error.error instanceof ErrorEvent) ?
        error.error.message :
       `server returned code ${error.status} with body "${error.error}"`;
  
      console.log(`${serviceName}: ${operation} failed: ${message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  
  getTree (): Observable<Tree> {
    return this.http.post<Tree>(Constants.ABOUT_URL, {},httpOptions).pipe(
      catchError(this.handleError('TreeOfLifeService', 'getTree', null))
    );
  }

  getSubtree (node_id: string): Observable<Subtree> {
    return this.http.post<Subtree>(Constants.SUBTREE_URL, 
      {
        'node_id': node_id, 
        'height_limit': Constants.THREE_OF_LIFE_API_HEIGHT_LIMIT, 
        'format': Constants.THREE_OF_LIFE_API_FORMAT
      }, 
      httpOptions).pipe(
      catchError(this.handleError('TreeOfLifeService', 'getSubtree', null))
    );
  }

  
}
