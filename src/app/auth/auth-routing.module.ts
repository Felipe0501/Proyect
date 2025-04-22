import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'sing_in',
  loadChildren: () => import('./sing-in/sing-in.module').then(si => si.SingInModule)
},
{
  path: 'sing_up',
  loadChildren: () => import('./sing-up/sing-up.module').then(su => su.SingUpModule)
},
{
path: '**',
redirectTo: 'sing_up',
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
