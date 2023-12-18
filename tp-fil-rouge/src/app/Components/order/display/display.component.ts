import { Component, Input } from '@angular/core';
import { OrderService } from '../../../Services/order.service';
import { CommonModule } from '@angular/common';
import { Order } from '../../../Models/Order.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {

  constructor(public data : OrderService){}

  @Input()
  order!: Order;

  deleteById(id : number): void {
    this.data.deleteOrderById(id);
  }

}
