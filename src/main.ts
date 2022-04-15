/* import { loadRemoteEntry } from '@angular-architects/module-federation';

Promise.all([
  loadRemoteEntry({
    type: 'script',
    remoteName: 'remote',
    remoteEntry: 'http://localhost:4201/remoteEntry.js',
  }),
])
  .catch((err) => console.error('Error loading remote entries', err))
  .then(() => import('./bootstrap'))
  .catch((err) => console.error(err));
 */

import('./bootstrap').catch((err) => console.error(err));
