import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { ListcontentComponent } from './components/listcontent/listcontent.component';


const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'list',
    component:ListComponent
  },
  {
    path:'search',
    component:SearchComponent
  },
  // {
  //   path:'',
  //   component:HomeComponent
  // },
  // {
  //   path:'**',
  //   component:HomeComponent
  // },
   {
    path:'list/:id',
    component:ListcontentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
