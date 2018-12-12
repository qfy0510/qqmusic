import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public list :any;
  constructor() { }

  ngOnInit() {
    this.list = [
      {
        "src":"../../assets/images/p1.jpg",
        "title":"巅峰榜·流行指数",
        "one":"那一夜- G.E.M. 邓紫棋",
        "two":"梦不落雨林- 张艺兴",
        "three":"归去来兮- 叶炫清"
      },
      {
        "src":"../../assets/images/p2.jpg",
        "title":"巅峰榜·热歌",
        "one":"没说什么- 张杰",
        "two":"耳朵- 李荣浩",
        "three":"光年之外- G.E.M. 邓紫棋"
      },
      {
        "src":"../../assets/images/p3.jpg",
        "title":"巅峰榜·新歌",
        "one":"耳朵- 李荣浩",
        "two":"没说什么- 张杰",
        "three":"那一夜- G.E.M. 邓紫棋"
      },
      {
        "src":"../../assets/images/p4.jpg",
        "title":"巅峰榜·2018中国好声音",
        "one":"为你我受冷风吹- 大壮",
        "two":"魔鬼中的天使 (Live)- 康树龙",
        "three":"魔鬼中的天使 (醇享版)- 康树龙"
      },
      {
        "src":"../../assets/images/p5.jpg",
        "title":"巅峰榜·网络歌曲",
        "one":"不在- 韩安旭",
        "two":"地铁等待- 宋孟君",
        "three":"可不可以- 艾辰"
      },
      {
        "src":"../../assets/images/p6.jpg",
        "title":"巅峰榜·内地",
        "one":"耳朵- 李荣浩",
        "two":"没说什么- 张杰",
        "three":"贝贝- 李荣浩"
      },
      {
        "src":"../../assets/images/p7.jpg",
        "title":"巅峰榜·港台",
        "one":"恰好- A-Lin",
        "two":"有一种悲伤- A-Lin",
        "three":"你敢不敢再傻一次- 吴克群"
      },
      {
        "src":"../../assets/images/p8.jpg",
        "title":"巅峰榜·欧美",
        "one":"Kiss and Make Up- Dua Lipa",
        "two":"1999- Charli XCX",
        "three":"I'm Still Here- Sia"
      },
      {
        "src":"../../assets/images/p9.jpg",
        "title":"巅峰榜·韩国",
        "one":"나라는 꿈- 조이 (Joy)",
        "two":"STAY BY MY SIDE- TWICE (트와이스)",
        "three":"그대 그대 그대- 윤미래 (尹美莱)"
      },
      {
        "src":"../../assets/images/p10.jpg",
        "title":"巅峰榜·影视金曲",
        "one":"归来来兮- 叶炫清",
        "two":"나라는 꿈- 조이 (Joy)",
        "three":"卡路里- 火箭少女101"
      },
      {
        "src":"../../assets/images/p11.jpg",
        "title":"巅峰榜·日本",
        "one":"まっしろ (白皑)- ビッケブランカ (Vicke Blanka)",
        "two":"PSYCHIC MAGIC- m-flo (陨-浮流)",
        "three":"イルミネーション (Illumination)- End of the World (世界の終わり)"
      },
      {
        "src":"../../assets/images/p12.jpg",
        "title":"巅峰榜·巅峰榜·腾讯音乐人原创榜",
        "one":"臆想- 莉莉童 (LIJIN.)",
        "two":"当我要走的时候 (正式版)- 陈硕子",
        "three":"赝品- 简弘亦"
      },
      {
        "src":"../../assets/images/p13.jpg",
        "title":"巅峰榜·K歌金曲",
        "one":"年少有为- 陈诚",
        "two":"刚好遇见你- K.D",
        "three":"体面- Gray"
      },
    ];
  }

}
