
import { Component, OnInit, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit, AfterViewInit {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // Additional setup logic can go here
  }

  scrollToObservability(): void {
    const observabilitySection = this.el.nativeElement.querySelector('#observability');
    if (observabilitySection) {
      this.renderer.setProperty(document.documentElement, 'scrollTop', observabilitySection.offsetTop);
    }
  }
}
