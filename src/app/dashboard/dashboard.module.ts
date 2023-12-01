import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule],
  exports: [DashboardComponent],
  providers: [DataService],
})
export class DashboardModule {}
