import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  newServices = [
    {
      title: 'Premium Living Spaces',
      description: 'Spacious, clean, and well-maintained rooms designed for maximum comfort, ventilation, and ease of mobility.',
      icon: '🏠'
    },
    {
      title: 'Individualized Care',
      description: 'Customized care plans tailored to meet each resident’s unique health requirements and personal daily needs.',
      icon: '📋'
    },
    {
      title: 'Medical Assistance',
      description: 'Regular health check-ups by specialists and 24/7 on-call medical assistance for complete peace of mind.',
      icon: '⚕️'
    },
    {
      title: '24/7 Emergency Care',
      description: 'Round-the-clock attentive supervision and emergency response systems to ensure total safety for our elders.',
      icon: '🚨'
    },
    {
      title: 'Wellness & Recreation',
      description: 'Daily social gatherings, wellness programs, and recreational activities to keep residents mentally and physically engaged.',
      icon: '🌟'
    },
    {
      title: 'Compassionate Support',
      description: 'Dignified assistance with daily activities like bathing, dressing, and mobility, provided with love and respect.',
      icon: '🤝'
    }
  ];
}