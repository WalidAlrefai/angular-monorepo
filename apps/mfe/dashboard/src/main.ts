import { setRemoteDefinitions } from '@nx/angular/mf';
import { init } from '@module-federation/enhanced/runtime';


fetch('/module-federation.manifest.json')
  .then((res) => res.json())
  .then((definitions) => setRemoteDefinitions(definitions))
  .then(() => import('./bootstrap').catch((err) => console.error(err)));
