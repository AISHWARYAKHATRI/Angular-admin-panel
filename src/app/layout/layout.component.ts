import { Component } from '@angular/core';
import { SIDEBAR_ITEMS } from '../../utils/constants';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  sidebarItems = SIDEBAR_ITEMS;
}
