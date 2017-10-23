import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApexService } from './apex.service';
import { ApexMainComponent } from './apex-main/apex-main.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ApexMainComponent],
  providers: [ApexService]
})
export class ApexModule { }
