import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CategoryService } from 'src/app/services/category.service';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  topPicks: number[] = []

  constructor(private catSrv: CategoryService, private store: Store<AppState>) { }

  ngOnInit(): void {
    console.log(this.store.select("category"))
    this.catSrv.getTopPicks().subscribe((item: any)=>{
      this.topPicks = item?.top_picks
    })
  }

}
