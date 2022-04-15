import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      loadRemoteModule({
        type: 'script',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Module',
        remoteName: 'remote',
      }).then((m) => m.ContainerModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
