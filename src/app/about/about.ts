import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [NgStyle],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  stats = [
    { label: 'Lives Saved', count: '10,000+', icon: '💙' },
    { label: 'Elderly Rescued', count: '9,810+', icon: '🤝' },
    { label: 'Health Checkups', count: '513k+', icon: '⚕️' },
    { label: 'Path Lab Tests', count: '117k+', icon: '🧪' }
  ];
}
