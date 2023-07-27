import {
  NgModule,
  // isDevMode
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HeaderModule } from './components/header/header.module';
import { reducers } from '../store/reducers';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { effects } from '../store/effects';
import { environment } from '../environments/environment';

const COMMON_COMPONENTS_MODULES = [HeaderModule];

const isDevelopment = !environment.production;

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    isDevelopment ? StoreDevtoolsModule.instrument() : [],

    ...COMMON_COMPONENTS_MODULES,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
