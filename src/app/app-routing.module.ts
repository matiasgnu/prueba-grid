import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSharedModule } from '../../projects/home/src/app/app.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../../projects/home/src/app/app.module').then(
        (m) => m.AppModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomeSharedModule.forRoot()],
  exports: [RouterModule],
})
export class AppRoutingModule {}
