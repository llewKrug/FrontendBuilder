import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShellComponent } from './app-shell/app-shell';
import { HeaderComponent } from './header/header';
import { SidenavComponent } from './sidenav/sidenav';
import { CanvasComponent } from './canvas/canvas';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppShellComponent,
    HeaderComponent,
    SidenavComponent,
    CanvasComponent
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    AppShellComponent,
    HeaderComponent,
    SidenavComponent,
    CanvasComponent
  ]
})
export class ShellModule {}
