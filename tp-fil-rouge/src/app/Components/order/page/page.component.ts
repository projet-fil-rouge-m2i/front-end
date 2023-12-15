import { Component } from '@angular/core';
import { DisplayComponent } from '../display/display.component';
import { OrderService } from '../../../Services/order.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [DisplayComponent, CommonModule],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent {

  filter = this.data.filterByPrice;

  constructor(public data : OrderService) { }

}
