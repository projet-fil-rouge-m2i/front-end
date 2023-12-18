import { Routes } from '@angular/router';
import { DisplayComponent } from './Components/order/display/display.component';
import { PageComponent } from './Components/order/page/page.component';
import { DisplayDetailComponent } from './Components/order/display-detail/display-detail.component';

export const routes: Routes = [

    {path:'order', component: PageComponent},
    {path : 'order/:id', component: DisplayDetailComponent}
];
