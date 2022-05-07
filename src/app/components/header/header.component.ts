import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() openSearchNav = new EventEmitter<void>();
  @Output() openLoginNav = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  openSearch(){
    this.openSearchNav.emit()
  }

  openLogin(){
    this.openLoginNav.emit()
  }

}
