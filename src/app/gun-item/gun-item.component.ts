import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SOUNDS} from '../app.constant';

@Component({
  selector: 'app-gun-item',
  templateUrl: 'gun-item.component.html',
  styleUrls: ['gun-item.component.css', '../gun-list/gun-list.component.css']
})
export class GunItemComponent implements OnInit, AfterViewInit {

  @ViewChild('sound') audio: ElementRef;
  guns = SOUNDS;

  // 发射模式（单发、连发）
  shotMode: 'single' | 'running' = 'single';
  runningTime = 3; // 连发次数
  runningTimeMax = 30; // 最高连发次数
  runningTimeMin = 3; // 最低连发次数

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    if (navigator.vibrate) {
      console.log("支持设备震动！");
    }
  }

  ngAfterViewInit() {
    this.route.params.subscribe((params) => {
      this.audio.nativeElement.src = this.guns[params['index']].src;
    });
  }

  /**
   * 播放声音
   * */
  playSound(index?: number) {
    console.log('点击');
    if (this.shotMode === 'running')
      if (typeof index === 'number') {
        if (index < this.runningTime)
          setTimeout(() => this.playSound(++index), 150);
      } else {
        setTimeout(() => this.playSound(2), 150);
      }
    this.audio.nativeElement.pause();
    this.audio.nativeElement.currentTime = 0;
    setTimeout(() => {
      this.audio.nativeElement.play();
      setTimeout(() => {
        navigator.vibrate([100]);
      }, 300);
    });
  }

  goListPage() {
    this.router.navigateByUrl('/');
  }

  singleModel() {
    this.shotMode = 'single';
  }

  runningFire() {
    this.shotMode = 'running';
  }

  setRunningTime() {
    this.runningTime = this.runningTime > this.runningTimeMax ? this.runningTimeMax : this.runningTime;
    this.runningTime = this.runningTime < this.runningTimeMin ? this.runningTimeMin : this.runningTime;
  }
}
