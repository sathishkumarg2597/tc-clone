import { Component, OnInit } from '@angular/core';

import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  topPicks: number[] = []

  constructor(private catSrv: CategoryService) { }

  ngOnInit(): void {
    this.catSrv.getTopPicks().subscribe((item: any)=>{
      this.topPicks = item?.top_picks
    })
  }

}
