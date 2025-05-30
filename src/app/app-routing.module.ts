// Example for app-routing.module.ts
import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'mfe1',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4000/remoteEntry.js', // MFE1's remote entry
        remoteName: 'mfe1', // As defined in MFE1's webpack
        exposedModule: './Module', // As exposed in MFE1's webpack
      }).then((m) => m.Mfe1FeatureModule), // The name of the exposed module class
  },
  // other shell routes can go here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
