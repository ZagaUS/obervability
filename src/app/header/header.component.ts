import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isDocumentationHovered = false;

  dropdownOptions = ['Observability', 'Sustainability'];

  onSelect(option: string): void {
    // Implement your logic when an option is selected
    console.log('Selected Option:', option);
  }

  onHoverDocumentationOption(option: string): void {
    // Set isDocumentationHovered to true when hovering over the Documentation options
    this.isDocumentationHovered = true;
  }
}