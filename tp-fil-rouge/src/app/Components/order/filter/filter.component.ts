import { Component } from '@angular/core';
import { OrderService } from '../../../Services/order.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  selectedPrice: number = 0;

  constructor(public filter : OrderService){

  }

  filterByPrice(): void {
    this.filter.filterByPrice(this.selectedPrice);
  }

  filterByPriceAsc(): void {
    this.filter.getOrderByPriceAsc();
  }

  filterByPriceDesc(): void {
    this.filter.getOrderByPriceDesc();
  }

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input) {
      this.filter.getSearchByTypePrestaOrDesignation(input.value);
    }
  }

  getPriceMin() : number {
    return this.filter.getPriceMinOfOrder()
  }

  getPriceMax(): number{
    return this.filter.getPriceMaxOfOrder()
  }




}
