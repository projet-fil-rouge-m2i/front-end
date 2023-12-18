import { Injectable } from '@angular/core';
import { Order } from '../Models/Order.model';
import { StateClient } from '../Models/StateClient.model';
import { StateOrder } from '../Models/StateOrder.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { OrderPost } from '../Models/OrderPost.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = 'http://127.0.0.1:8080/orders';

  private lstOrderOriginal : Order[] = [];
  public lstOrder: Order[] = [];
  private order: Order | undefined;

  constructor(private http: HttpClient) {
  }

  getOrder(){
    return this.http.get<Order[]>(this.apiUrl).subscribe(
      (data) => {
        this.lstOrderOriginal = data;
        this.lstOrder = [...data];
      },
      (error) => {
        console.error('Erreur lors de la récupération des commandes:', error);
      });
  }

  getOrderById(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.apiUrl}/${id}`);
  }

  deleteOrderById(id: number) {
    this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' })
      .subscribe(
        data => {
          console.log("Commande supprimée avec succès")
          this.getOrder()
        },
        error => console.error("Erreur lors de la suppression de la commande", error)
      );
  }

  postOrder(order : OrderPost) : Observable<Order>{
    return this.http.post<Order>(this.apiUrl, order);
  }

  /////////////////Methode de filtrage/////////////////////////
  filterByPrice(price : number){
    this.lstOrder = this.lstOrderOriginal.filter(order => order.unitPrice <= price);
  }

  getPriceMaxOfOrder(){
    return Math.max(...this.lstOrderOriginal.map(order => order.unitPrice));
  }

  getPriceMinOfOrder(){
    return Math.min(...this.lstOrderOriginal.map(order => order.unitPrice));
  }

  getOrderByPriceAsc(){
    this.lstOrder = [...this.lstOrderOriginal].sort((a, b) => a.unitPrice - b.unitPrice);
  }

  getOrderByPriceDesc(){
    this.lstOrder = [...this.lstOrderOriginal].sort((a, b) => b.unitPrice - a.unitPrice);
  }

  getSearchByTypePrestaOrDesignation(search : string){
    this.lstOrder = this.lstOrderOriginal.filter(order =>
      order.typePresta.toLowerCase().includes(search.toLowerCase()) || 
      order.designation.toLowerCase().includes(search.toLowerCase()));
  }
}
