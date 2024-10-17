import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

import { SIDEBAR_ITEMS } from '../../utils/constants';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [LucideAngularModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  sidebarItems = SIDEBAR_ITEMS;
}
