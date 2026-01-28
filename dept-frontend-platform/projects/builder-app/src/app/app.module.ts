import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ShellModule } from '../../../dept-ui/src/lib/shell/shell.module';

@NgModule({
  imports: [
    BrowserModule,
    ShellModule,
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
