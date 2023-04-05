import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order, Orders } from 'src/app/services/order';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private ordersUrl = 'api/orders';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  private log(message: string) {
   // this.messageService.add(`HeroService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
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

  getOrders(): Observable<Order[]> {
    // const orders = of(Orders)
    // return orders
    // return this.http.get<Order[]>(this.ordersUrl)
    return this.http.get<Order[]>(this.ordersUrl)
    .pipe(
      tap(_ => this.log('fetched orders')),
      catchError(this.handleError<Order[]>('getOrders', []))
    );
  }

  /** GET order by id. Will 404 if id not found */
  getOrder(id: number): Observable<Order> {
    const url = `${this.ordersUrl}/${id}`;
    return this.http.get<Order>(url).pipe(
      tap(_ => this.log(`fetched order id=${id}`)),
      catchError(this.handleError<Order>(`getOrder id=${id}`))
    );
  }

  /** PUT: update the order on the server */
  updateOrder(order: Order): Observable<any> {
    return this.http.put(this.ordersUrl, order, this.httpOptions).pipe(
      tap(_ => this.log(`updated order id=${order.ID}`)),
      catchError(this.handleError<any>('updateOrder'))
    );
  }

  /** POST: add a new order to the server */
  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.ordersUrl, order, this.httpOptions).pipe(
      tap((newOrder: Order) => this.log(`created order w/ id=${newOrder.ID}`)),
      catchError(this.handleError<Order>('createOrder'))
    );
  }

  /** DELETE: delete the order from the server */
  deleteOrder(id: number): Observable<Order> {
    const url = `${this.ordersUrl}/${id}`;

    return this.http.delete<Order>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted order id=${id}`)),
      catchError(this.handleError<Order>('deleteOrder'))
    );
  }

}
