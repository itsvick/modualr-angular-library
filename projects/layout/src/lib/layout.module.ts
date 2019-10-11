import { CardsModule } from '@project-sunbird/common-consumption/cards';
import { LibraryCardsStackComponent } from './library-cards-stack/library-cards-stack.component';
import { LibraryCardsGridComponent } from './library-cards-grid/library-cards-grid.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [LibraryCardsStackComponent, LibraryCardsGridComponent],
    imports: [
        CommonModule,
        CardsModule
    ],
    exports: [LibraryCardsStackComponent, LibraryCardsGridComponent]
})
export class LayoutModule { }
