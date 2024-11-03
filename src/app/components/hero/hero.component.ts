import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideGithub, lucideLinkedin } from '@ng-icons/lucide';
import { HlmAvatarModule } from '@spartan-ng/ui-avatar-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { BrnHoverCardModule } from '@spartan-ng/ui-hovercard-brain';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { HlmHoverCardModule } from '@spartan-ng/ui-hovercard-helm';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    HlmAvatarModule,
    HlmButtonDirective,
    HlmIconComponent,
    BrnHoverCardModule,
    HlmHoverCardModule,
    HlmAvatarModule,
  ],
  providers: [provideIcons({ lucideGithub, lucideLinkedin })],
  templateUrl: './hero.component.html',
})
export class HeroComponent {}
