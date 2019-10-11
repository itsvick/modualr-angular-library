import { NgModule } from '@angular/core';
import { LibraryFiltersComponent } from './library-filters/library-filters.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LibraryFiltersComponent],
  imports: [
    CommonModule
  ],
  exports: [LibraryFiltersComponent]
})
export class LibraryFiltersModule { }
