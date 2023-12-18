import { Component } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [FilterComponent],
  templateUrl: './aside.component.html',
})
export class AsideComponent {

}
