import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// Bootstrap the main Angular module for WildernessHub
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
