import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Component
@Component({
  selector: 'hello-world',
  template: '<h1>Hello {{ name }}!</h1>'
})
export class HelloWorldComponent {
  name: string;

  constructor() {
    this.name = 'Title from component ' + 'Angular';
  }
}

// Module
@NgModule({
  imports: [BrowserModule],
  declarations: [HelloWorldComponent],
  bootstrap: [HelloWorldComponent]
})
export class AppModule { }

// App bootstrap
platformBrowserDynamic().bootstrapModule(AppModule);