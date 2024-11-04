import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import videojs from 'video.js';
import { User } from '../../services/users.service';

@Component({
  selector: 'app-player',
  standalone: true,
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent implements OnInit, OnDestroy {
  @ViewChild('target', { static: true })
  videoPlayer!: ElementRef;

  @Input({ required: true }) user: User | null = null;

  player: any;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    const player = videojs(this.videoPlayer.nativeElement, {
      controls: true,
      //autoplay: true,
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
