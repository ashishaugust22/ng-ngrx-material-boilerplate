import {
  NgModule,
  // isDevMode
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
// import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HeaderModule } from './components/header/header.module';

const COMMON_COMPONENTS_MODULES = [HeaderModule];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    // StoreModule.forRoot(reducers, { metaReducers }),
    // isDevMode() ? StoreDevtoolsModule.instrument() : []
    StoreDevtoolsModule.instrument(), // TODO: remove this line in production

    ...COMMON_COMPONENTS_MODULES,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
