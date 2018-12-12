import { Component, OnInit } from '@angular/core';
import { Routes, ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-listcontent',
  templateUrl: './listcontent.component.html',
  styleUrls: ['./listcontent.component.css']
})
export class ListcontentComponent implements OnInit {
 public arr :any;
 public content :any;
  constructor(private route:ActivatedRoute) { 
    console.log(this.route.params);
    this.arr = [
      {
        "src":"../../assets/images/list1.jpg",
        "title":"巅峰榜·流行指数",
        "sort":["那一夜- G.E.M. 邓紫棋","梦不落雨林- 张艺兴","归去来兮- 叶炫清"]
      },
      {
        "src":"../../assets/images/list2.jpg",
        "title":"巅峰榜·热歌",
        "sort":["没说什么- 张杰","耳朵- 李荣浩","光年之外- G.E.M. 邓紫棋"]
      },
      {
        "src":"../../assets/images/list3.jpg",
        "title":"巅峰榜·新歌",
        "sort":["耳朵- 李荣浩","没说什么- 张杰","那一夜- G.E.M. 邓紫棋"]
      },
      {
        "src":"../../assets/images/list4.jpg",
        "title":"巅峰榜·2018中国好声音",
        "sort":["为你我受冷风吹- 大壮","魔鬼中的天使 (Live)- 康树龙","魔鬼中的天使 (醇享版)- 康树龙"]
      },
      {
        "src":"../../assets/images/list3.jpg",
        "title":"巅峰榜·网络歌曲",
        "sort":["不在- 韩安旭","地铁等待- 宋孟君","可不可以- 艾辰"]
      },
      {
        "src":"../../assets/images/list6.jpg",
        "title":"巅峰榜·内地",
        "sort":["耳朵- 李荣浩","没说什么- 张杰","贝贝- 李荣浩"]
      },
      {
        "src":"../../assets/images/list7.jpg",
        "title":"巅峰榜·港台",
        "sort":["恰好- A-Lin","有一种悲伤- A-Lin","你敢不敢再傻一次- 吴克群"]
      },
      {
        "src":"../../assets/images/list8.jpg",
        "title":"巅峰榜·欧美",
        "sort":["Kiss and Make Up- Dua Lipa","1999- Charli XCX","I'm Still Here- Sia"]
      },
      {
        "src":"../../assets/images/list9.jpg",
        "title":"巅峰榜·韩国",
        "sort":["나라는 꿈- 조이 (Joy)","STAY BY MY SIDE- TWICE (트와이스)","그대 그대 그대- 윤미래 (尹美莱)"]
      },
      {
        "src":"../../assets/images/list10.jpg",
        "title":"巅峰榜·影视金曲",
        "sort":["归来来兮- 叶炫清","나라는 꿈- 조이 (Joy)","卡路里- 火箭少女101"]
      },
      {
        "src":"../../assets/images/list11.jpg",
        "title":"巅峰榜·日本",
        "sort":["まっしろ (白皑)- ビッケブランカ (Vicke Blanka)","PSYCHIC MAGIC- m-flo (陨-浮流)","イルミネーション (Illumination)- End of the World (世界の終わり)"]
      },
      {
        "src":"../../assets/images/list12.jpg",
        "title":"巅峰榜·巅峰榜·腾讯音乐人原创榜",
        "sort":["臆想- 莉莉童 (LIJIN.)","当我要走的时候 (正式版)- 陈硕子","赝品- 简弘亦"]
      },
      {
        "src":"../../assets/images/list1.jpg",
        "title":"巅峰榜·K歌金曲",
        "sort":["年少有为- 陈诚","刚好遇见你- K.D","体面- Gray"]
      },
    ];
  }

  ngOnInit() {
    var self = this;
    this.route.params.subscribe(function(data){ 
        //console.log(data.id);
        switch(data.id){
          case '0' :self.content = self.arr[0];break;
          case '1' :self.content = self.arr[1];break;
          case '2' :self.content = self.arr[2];break;
          case '3' :self.content = self.arr[3];break;
          case '4' :self.content = self.arr[4];break;
          case '5' :self.content = self.arr[5];break;
          case '6' :self.content = self.arr[6];break;
          case '7' :self.content = self.arr[7];break;
          case '8' :self.content = self.arr[8];break;
          case '9' :self.content = self.arr[9];break;
          case '10' :self.content = self.arr[10];break;
          case '11' :self.content = self.arr[11];break;
          case '12' :self.content = self.arr[12];break;
          case '13' :self.content = self.arr[13];break;
        }

    });
  }

}
