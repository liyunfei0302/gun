import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SOUNDS} from '../app.constant';

@Component({
  selector: 'app-gun-item',
  templateUrl: 'gun-item.component.html',
  styleUrls: ['gun-item.component.css', '../gun-list/gun-list.component.css']
})
export class GunItemComponent implements OnInit, AfterViewInit {

  contentHeight: number;  // 内容高度
  contentHeightStr: string;  // 内容高度px
  textTopStr: string;  // 文字top高度px
  @ViewChild('sound') audio: ElementRef;
  guns = SOUNDS;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
      this.contentHeight = document.body.scrollHeight;
      this.contentHeightStr = `${this.contentHeight}px`;
      this.textTopStr = `${this.contentHeight / 2 - 20}px`;
  }

  ngAfterViewInit() {
      this.route.params.subscribe((params) => {
        this.audio.nativeElement.src = this.guns[params['index']].src;
      });
  }

  /**
   * 播放声音
   * */
  playSound() {
    console.log('点击');
    this.audio.nativeElement.play();
  }

  goListPage() {
    this.router.navigateByUrl('/');
  }
}
