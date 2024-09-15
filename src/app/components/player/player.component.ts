import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

@Component({
  selector: 'app-player',
  standalone: true,
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('target')
  videoPlayer!: ElementRef;

  player: any;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    const player = videojs(this.videoPlayer.nativeElement, {
      controls: true,
      autoplay: true,
      preload: 'auto',
      liveui: true,
      controlBar: {
        volumePanel: true,
        fullscreenToggle: true,
        timeDivider: false,
        durationDisplay: false,
        remainingTimeDisplay: false,
        progressControl: false,
        playToggle: false,
      },
      userActions: {
        hotkeys: false,
        doubleClick: false,
        tap: false,
      },
      sources: {
        src: 'http://localhost:3000/stream/andersonzero0/',
        type: 'application/x-mpegURL',
      },
    });

    this.player = player;
  }

  ngOnDestroy(): void {
    if (this.player) {
      this.player.dispose();
    }
  }
}
