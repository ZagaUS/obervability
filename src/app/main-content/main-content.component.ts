
import { Component, OnInit, AfterViewInit, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit, AfterViewInit {

  showObservability = true;
  showSustainability = true;
  @ViewChild('observabilitySection') observabilitySection: ElementRef| undefined;
  @ViewChild('sustainabilitySection') sustainabilitySection: ElementRef | undefined;
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // Additional setup logic can go here
  }

  scrollToObservability() {
    this.showObservability = true;
    // Assuming you have an element reference for the details component
    if (this.observabilitySection) {
      this.observabilitySection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
  }

  scrollToSustainability() {
    this.showSustainability = true;
    // Assuming you have an element reference for the details component
    if (this.sustainabilitySection) {
      this.sustainabilitySection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
  }
}
