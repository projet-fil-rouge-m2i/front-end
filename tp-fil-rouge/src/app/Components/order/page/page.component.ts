import { Component, OnInit } from '@angular/core';
import { DisplayComponent } from '../display/display.component';
import { OrderService } from '../../../Services/order.service';
import { CommonModule } from '@angular/common';
import { FilterComponent } from '../filter/filter.component';
import { AsideComponent } from '../aside/aside.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Order } from '../../../Models/Order.model';
import { FormsModule } from '@angular/forms';
import { OrderPost } from '../../../Models/OrderPost.model';
import { StateOrder } from '../../../Models/StateOrder.model';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [DisplayComponent, CommonModule, FilterComponent, AsideComponent, HttpClientModule, FormsModule],
  templateUrl: './page.component.html',
})
export class PageComponent implements OnInit {

  newOrder : OrderPost = {
    typePresta: "",
    designation: "",
    idClient: 0,
    nbDays: 0,
    unitPrice: 0,
    totalExcludeTaxe: 0, 
    totalWithTaxe: 0,
    state: StateOrder.CONFIRMED,
  };

  constructor(public orderService: OrderService, private http: HttpClient) {}

  ngOnInit() {
    this.orderService.getOrder()
  }

  onSubmit() {
    this.orderService.postOrder(this.newOrder).pipe(
      switchMap(async () => this.orderService.getOrder())
    ).subscribe(
      orders => {
        console.log('Updated orders', orders);
      },
      error => {
        console.error('Error occurred', error);
      }
    );
    
    this.newOrder = {     
      typePresta: "",
      designation: "",
      idClient: 0,
      nbDays: 0,
      unitPrice: 0,
      totalExcludeTaxe: 0, 
      totalWithTaxe: 0,
      state: StateOrder.CONFIRMED, 
    }; // Réinitialiser le formulaire
  }

}
