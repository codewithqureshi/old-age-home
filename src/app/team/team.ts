import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  imports: [],
  templateUrl: './team.html',
  styleUrl: './team.css',
})
export class Team {
  team = [
    {
      name: 'Dr. Ramesh Kumar',
      role: 'Founder & Chairman',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400',
      bio: 'Visionary behind Jeevan Ashray with 20+ years in social service.'
    },
    {
      name: 'Sneha Kapoor',
      role: 'Operations Head',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400',
      bio: 'Ensuring every elder gets the best care and home-like environment.'
    },
    {
      name: 'Amit Sharma',
      role: 'Chief Medical Officer',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400',
      bio: 'Leading our 24/7 medical response and geriatric health programs.'
    },
    {
      name: 'Priya Singh',
      role: 'Volunteer Coordinator',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400',
      bio: 'Connecting hearts and hands to serve our elderly community.'
    }
  ];
}
