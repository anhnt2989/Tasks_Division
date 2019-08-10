import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TaskManagerComponent} from './component/task-manager/task-manager.component';


const routes: Routes = [
  {path: 'tasks', component: TaskManagerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
