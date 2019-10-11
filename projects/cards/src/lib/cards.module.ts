import { CourseCardComponent } from './course-card/course-card.component';
import { LibraryCardComponent } from './library-card/library-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [CourseCardComponent, LibraryCardComponent],
    imports: [
        CommonModule
    ],
    exports: [CourseCardComponent, LibraryCardComponent]
})
export class CardsModule { }
