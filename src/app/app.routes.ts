import { Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [
 /*   {

path:'',

component:MainComponent,

children:[
*/
{
path:'',
component:HomeComponent
},

{
path:'products',
component:ProductsComponent
}

/*]

}*/
];

/*{path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)},
    {path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)},
    {path: 'products', loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent)},*/