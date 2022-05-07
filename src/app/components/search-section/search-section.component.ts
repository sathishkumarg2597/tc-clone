import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.scss']
})
export class SearchSectionComponent implements OnInit {

  @Output() closeSearchNav = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  closeNav(){
    this.closeSearchNav.emit();
  }

}
