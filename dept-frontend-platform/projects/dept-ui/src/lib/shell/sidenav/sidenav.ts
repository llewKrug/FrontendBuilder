import { Component } from '@angular/core';

@Component({
  selector: 'dept-sidenav',
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.css',
  standalone: false
})
export class SidenavComponent {
  elements = [
    { type: 'card', label: 'Card' },
    { type: 'button', label: 'Button' },
    { type: 'container', label: 'Container' },
    { type: 'text', label: 'Text' },
  ];

  onDragStart(event: DragEvent, element: any) {
    event.dataTransfer?.setData('application/json', JSON.stringify(element));
  }
}
