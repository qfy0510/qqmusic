import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public search :any;
  constructor() { }

  ngOnInit() {
    this.search = ['见面吧！爱豆ONER','一起走过的日子','为你我收冷风吹','LOST RIVERS','不在','爱豆故事上集','你一定要幸福','TOCIC'];
  }

}
