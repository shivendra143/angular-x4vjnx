import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PlaygroundModule } from 'angular-playground';

PlaygroundModule
  .configure({
      selector: 'cm-app-component',
      modules: []
  });

platformBrowserDynamic().bootstrapModule(PlaygroundModule);
