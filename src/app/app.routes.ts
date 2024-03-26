import { Routes } from '@angular/router';
import { ForYouPageComponent } from './pages/for-you-page/for-you-page.component';

export const routes: Routes = [
    { path: 'for-you', component: ForYouPageComponent, title: 'For You' },
    { path: '', pathMatch: 'full', redirectTo: 'for-you' },
    { path: '**', redirectTo: '/for-you' }
];
