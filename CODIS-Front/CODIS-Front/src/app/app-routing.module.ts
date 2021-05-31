import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'dna',
    loadChildren: () => import('./pages/dnaLoad/dna/dna.module').then( m => m.DnaPageModule)
  },
  {
    path: 'sample',
    loadChildren: () => import('./pages/dnaLoad/sample/sample.module').then( m => m.SamplePageModule)
  },
  {
    path: 'infoslide',
    loadChildren: () => import('./pages/infoSlides/infoslide/infoslide.module').then( m => m.InfoslidePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
