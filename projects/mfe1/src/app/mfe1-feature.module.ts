import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mfe1FeatureComponent } from './mfe1-feature/mfe1-feature.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: Mfe1FeatureComponent }
];

@NgModule({
  declarations: [Mfe1FeatureComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [Mfe1FeatureComponent]
})
export class Mfe1FeatureModule { }
