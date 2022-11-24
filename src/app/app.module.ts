import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TestComponent } from './component/test.component';
import { OneComponent } from './one.component';
import { ClickService } from './click.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, TestComponent, OneComponent],
  bootstrap: [AppComponent],
  providers: [ClickService],
})
export class AppModule {}
