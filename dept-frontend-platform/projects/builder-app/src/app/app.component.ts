import { Component, signal } from '@angular/core';
import { ShellModule } from '../../../dept-ui/src/lib/shell/shell.module';
import {HomeComponent} from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.scss'],
  standalone: true,
  imports: [ShellModule, HomeComponent]
})
export class AppComponent {
  protected readonly title = signal('builder-app');
}
