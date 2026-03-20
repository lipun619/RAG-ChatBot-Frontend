import { Routes } from '@angular/router';

// All sections are rendered on a single scrollable page.
// Routes are kept minimal for potential future deep-linking.
export const routes: Routes = [
  {
    path: '**',
    redirectTo: '',
  },
];
