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
      title: 'Comfortable Living',
      description: 'Simple, clean, and airy rooms where elders can feel at ease and move around safely, just like at home.',
      icon: '🏠'
    },
    {
      title: 'Personal Attention',
      description: 'We understand every resident has different needs. Our staff provides dedicated care based on individual health and habits.',
      icon: '🤲'
    },
    {
      title: 'Healthcare Support',
      description: 'Regular health check-ups and 24/7 on-call medical assistance to ensure our elders stay healthy and safe.',
      icon: '🩺'
    },
    {
      title: 'Constant Supervision',
      description: 'Our team is always present to help and respond quickly to any emergency, day or night.',
      icon: '🛡️'
    },
    {
      title: 'Social Wellbeing',
      description: 'Daily interaction, light recreation, and prayer meets to keep the mind happy and remove the feeling of loneliness.',
      icon: '🙏'
    },
    {
      title: 'Dignified Daily Care',
      description: 'Respectful help with daily activities like bathing and dressing, provided with the same love one gives to their own family.',
      icon: '🤝'
    }
  ];
}