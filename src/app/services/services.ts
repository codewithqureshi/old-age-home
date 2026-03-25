import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
interface Service {
  title: string;
  description: string;
  image: string;
  icon: string;
}
@Component({
  selector: 'app-services',
  imports: [NgClass],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  services = [
    {
      title: 'Organic Farming',
      description: 'Our elders engage in pesticide-free farming, growing fresh vegetables that are used in our own kitchen.',
      image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=800',
      icon: '🌿'
    },
    {
      title: 'Skill Center',
      description: 'Teaching traditional crafts, candle making, and pottery to help elders stay active and feel productive.',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800',
      icon: '🎨'
    },
    {
      title: 'Medical Care',
      description: 'Specialized geriatric care with 24/7 nursing staff and regular physiotherapy sessions.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800',
      icon: '⚕️'
    },
    {
      title: 'Nutritious Food',
      description: 'Freshly cooked farm-to-table meals ensured for the dietary needs of every resident.',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800',
      icon: '🍲'
    },
    {
      title: 'Rescue & Relief',
      description: 'A dedicated team to rescue abandoned elders from the streets and provide them a forever home.',
      image: 'https://images.unsplash.com/photo-1444840535719-195841cb6e2b?q=80&w=800',
      icon: '🤝'
    },
    {
      title: 'Safe Shelter',
      description: 'Eco-friendly, peaceful living spaces designed for comfort, safety, and community bonding.',
      image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800',
      icon: '🏠'
    }
  ];
  images = [
    { url: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800', alt: 'Elders smiling' },
    { url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800', alt: 'Food distribution' },
    { url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800', alt: 'Medical checkup' },
    { url: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=800', alt: 'Group activity' },
    { url: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800', alt: 'Skill development' },
    { url: 'https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=800', alt: 'Clasping hands' },
  ];
}
