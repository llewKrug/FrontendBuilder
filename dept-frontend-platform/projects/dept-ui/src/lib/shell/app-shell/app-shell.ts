import { Component } from '@angular/core';


interface ElementType {
  type: string;
  label: string;
}

interface SpawnedElement {
  type: string;
  top: number;
  left: number;
  width: number;
  height: number;
  label?: string;
  bgColor?: string;
  fontSize?: number;
}

@Component({
  selector: 'dept-app-shell',
  templateUrl: './app-shell.html',
  styleUrl: './app-shell.css',
  standalone: false,
})

export class AppShellComponent {
  elements: ElementType[] = [
    { type: 'button', label: 'Button' },
    { type: 'input', label: 'Input' },
    { type: 'contianer', label: 'Contianer' },
  ];

  selectedElement: ElementType | null = null;
  spawnedElements: SpawnedElement[] = [];

  isDragging = false;
  dragStart = { x: 0, y: 0 };
  previewRect = { top: 0, left: 0, width: 0, height: 0 };
  selectedElementIndex: number | null = null;


  onSelectElement(el: ElementType) {
    this.selectedElement = el;
  }

  onCanvasMouseDown(event: MouseEvent) {
    if (!this.selectedElement) return;

    this.isDragging = true;
    this.dragStart = { x: event.offsetX, y: event.offsetY };
    this.previewRect = {
      top: this.dragStart.y,
      left: this.dragStart.x,
      width: 0,
      height: 0
    };

  }

  onCanvasMouseMove(event: MouseEvent) {
    if (!this.isDragging || !this.selectedElement) return;

    const width = event.offsetX - this.dragStart.x;
    const height = event.offsetY - this.dragStart.y;

    this.previewRect = {
      top: this.dragStart.y,
      left: this.dragStart.x,
      width: width > 0 ? width : 50,
      height: height > 0 ? height : 30
    };
  }

  onCanvasMouseUp(event: MouseEvent) {
    if (!this.isDragging || !this.selectedElement) return;

    const x = this.dragStart.x;
    const y = this.dragStart.y;
    const width = event.offsetX - x;
    const height = event.offsetY - y;

    this.spawnedElements.push({
      type: this.selectedElement.type,
      top: this.previewRect.top,
      left: this.previewRect.left,
      width: this.previewRect.width,
      height: this.previewRect.height,
      label: this.selectedElement.label || '',
      bgColor: '#2563eb',
      fontSize: 14
    });

    this.isDragging = false;
    this.selectedElement = null;
    this.previewRect = { top: 0, left: 0, width: 0, height: 0 };
  }
  isSelected(el: ElementType) {
    return this.selectedElement === el;
  }
  selectSpawnedElement(index: number, event: MouseEvent) {
    event.stopPropagation();
    this.selectedElementIndex = index;
    this.selectedElement = null;
  }

  onCanvasClick() {
    this.selectedElementIndex = null;
    this.selectedElement = null;
  }

  deleteElement(index: number) {
    this.spawnedElements.splice(index, 1);
    this.selectedElementIndex = null;
  }

}
