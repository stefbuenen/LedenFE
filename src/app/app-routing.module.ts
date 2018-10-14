import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LedenComponent } from './leden/leden.component';
import { PostcodesComponent } from './postcodes/postcodes.component';

const routes : Routes = [
  { path: '', redirectTo: 'lid', pathMatch: 'full'},
  { path: 'lid', component: LedenComponent},
  { path: 'postcode', component: PostcodesComponent},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
