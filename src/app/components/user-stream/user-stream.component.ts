import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User, UsersService } from '../../services/users.service';
import { PlayerComponent } from '../player/player.component';
import { LucideAngularModule } from 'lucide-angular';
import { HlmSkeletonComponent } from '../../libs/ui/ui-skeleton-helm/src';
import {
  HlmAvatarComponent,
  HlmAvatarFallbackDirective,
  HlmAvatarImageDirective,
} from '../../libs/ui/ui-avatar-helm/src';
import ColorThief from 'colorthief';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-stream',
  standalone: true,
  imports: [
    PlayerComponent,
    LucideAngularModule,
    HlmSkeletonComponent,
    HlmAvatarComponent,
    HlmAvatarImageDirective,
    HlmAvatarFallbackDirective,
    CommonModule,
  ],
  templateUrl: './user-stream.component.html',
})
export class UserStreamComponent implements OnInit {
  @ViewChild('sectionMain') sectionMain!: ElementRef<HTMLElement>;
  @ViewChild('avatarImage') avatarImage!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private httpClient: HttpClient
  ) {}

  dominantColor: string = 'rgb(255, 255, 255)';

  loading = true;
  error: boolean = false;
  user: User | null = null;

  ngOnInit(): void {
    if (this.route.snapshot.params['username']) {
      const username = this.route.snapshot.params['username'];

      this.usersService.getUser(username).subscribe({
        next: (user) => {
          this.user = user;
        },
        error: () => {
          this.error = true;
        },
        complete: () => {
          this.loading = false;
        },
      });
    }
  }

  extractDominantColor(): void {
    const colorThief = new ColorThief();
    const img = this.avatarImage.nativeElement;

    if (img.complete) {
      this.processImage(img, colorThief);
    } else {
      img.addEventListener('load', () => {
        this.processImage(img, colorThief);
      });
    }
  }

  processImage(img: HTMLImageElement, colorThief: ColorThief): void {
    const proxyUrl = `/github${new URL(img.src).pathname}`;
    console.log('Proxy URL:', proxyUrl);
    this.httpClient.get(proxyUrl, { responseType: 'blob' }).subscribe(
      (blob) => {
        console.log('Blob:', blob);
        const url = URL.createObjectURL(blob);
        const newImg = new Image();
        newImg.crossOrigin = 'Anonymous';
        newImg.src = url;
        newImg.onload = () => {
          const dominantColorArray = colorThief.getColor(newImg);
          this.dominantColor = `rgba(${dominantColorArray.join(',')}, 1)`;
          URL.revokeObjectURL(url);
        };
      },
      (error) => {
        console.error('Error loading the image:', error);
      }
    );
  }
}
