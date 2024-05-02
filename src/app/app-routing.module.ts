import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { ComponentTestComponent } from './example/component-test/component-test.component';

const routes: Routes = [
  {
    path: '', component: AppLayoutComponent,
    children: [
      {path: '', component: ComponentTestComponent}
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
