import { Injectable } from '@angular/core';
import { Order } from '../Models/Order.model';
import { StateClient } from '../Models/StateClient.model';
import { StateOrder } from '../Models/StateOrder.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  lstOrder : Order[] = [
    {
      id: 1,
      typePresta:"Formation",
      designation: "",
      client : {
        id: 1,
        companyName:"",
        firstName:"",
        lastName:"",
        email:"",
        phoneNumber:"",
        address:"",
        zipCode:"",
        city:"",
        country:"",
        state: StateClient.ACTIVE
      },
      nbDays:5,
      unitPrice:10000,
      totalExcludeTaxe:120000,
      totalWithTaxe:100000,
      state:StateOrder.CANCELED,
    },
    {
      id: 2,
      typePresta:"Formation",
      designation: "",
      client : {
        id: 1,
        companyName:"",
        firstName:"",
        lastName:"",
        email:"",
        phoneNumber:"",
        address:"",
        zipCode:"",
        city:"",
        country:"",
        state: StateClient.ACTIVE
      },
      nbDays:5,
      unitPrice:10000,
      totalExcludeTaxe:120000,
      totalWithTaxe:100000,
      state:StateOrder.CANCELED,
    },
    {
      id: 3,
      typePresta:"Formation",
      designation: "",
      client : {
        id: 1,
        companyName:"",
        firstName:"",
        lastName:"",
        email:"",
        phoneNumber:"",
        address:"",
        zipCode:"",
        city:"",
        country:"",
        state: StateClient.ACTIVE
      },
      nbDays:5,
      unitPrice:10000,
      totalExcludeTaxe:120000,
      totalWithTaxe:100000,
      state:StateOrder.CANCELED,
    },
  ]

  lstOrderFilter : Order[] = this.lstOrder;

  filterByPrice(price : number){
    this.lstOrderFilter = this.lstOrder.filter(order => order.totalWithTaxe <= price);
  }
}
