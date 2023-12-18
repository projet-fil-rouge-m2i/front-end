import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { OrderService } from '../../../Services/order.service';
import { Order } from '../../../Models/Order.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-detail.component.html',
  styleUrl: './display-detail.component.css'
})
export class DisplayDetailComponent implements OnInit {

  order: Order | undefined;


  constructor(private route: ActivatedRoute, private orderService: OrderService) {}

  ngOnInit() {
    this.loadOrderDetails();
  }

  loadOrderDetails() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = +idParam;
      this.orderService.getOrderById(id).subscribe(
        order => this.order = order,
        error => console.error('Erreur lors du chargement de la commande', error)
      );
    } else {
      console.error('Aucun ID trouvé dans la route');
    }
  }

}
