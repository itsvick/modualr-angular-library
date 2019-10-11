// export { LibraryFiltersComponent } from './library-filters.component';
export enum LibraryFiltersLayout {
    ROUND = 'round',
    SQUARE = 'square'
}

export interface ILibraryList {
    text: string;
    active: boolean;
}
