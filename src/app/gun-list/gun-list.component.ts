import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SOUNDS} from '../app.constant';

@Component({
  templateUrl: './gun-list.component.html',
  styleUrls: ['./gun-list.component.css']
})
export class GunListComponent implements OnInit {

  contentHeight: number;  // 内容高度
  contentHeightStr: string;  // 内容高度px
  scrollHeight: number; // 正文高度
  clientWidth: number; // 可见高度
  guns = SOUNDS;  // 枪

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.scrollHeight = document.body.scrollHeight;
    this.clientWidth = document.body.clientWidth;
    this.contentHeight = this.scrollHeight > this.clientWidth ? this.scrollHeight : this.clientWidth;
    this.contentHeightStr = `${this.contentHeight}px`;
  }

  goItemPage(index: number) {
    this.router.navigateByUrl(`/item/${index}`);
  }
}
