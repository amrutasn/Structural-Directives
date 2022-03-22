import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgIfDemoComponent } from './ng-if-demo/ng-if-demo.component';
import { NgIfElseComponent } from './ng-if-else/ng-if-else.component';
import { NgForDemoComponent } from './ng-for-demo/ng-for-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    NgIfDemoComponent,
    NgIfElseComponent,
    NgForDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
