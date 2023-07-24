import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { ContactListComponent } from './contact-list/contact-list.component';



const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page'
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Home details'
    },
    {
      path: 'details/:id',
      component: ContactListComponent,
      title: 'Contatos'
    },
  ];
  
  export default routeConfig;