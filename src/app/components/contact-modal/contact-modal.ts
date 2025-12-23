import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
  hoverColor: string;
  imageUrl?: string;
}

@Component({
  selector: 'app-contact-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-modal.html',
  styleUrls: ['./contact-modal.css']
})
export class ContactModalComponent {
  @Output() close = new EventEmitter<void>();

socialLinks: SocialLink[] = [
  { 
    name: 'GitHub', 
    url: 'https://github.com/RobertKhachaturovi', 
    icon: 'github',
    color: '#333333',
    hoverColor: '#4a4a4a',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' // Add this line
  },
  { 
    name: 'Instagram', 
    url: 'https://www.instagram.com/robertkhachaturovi/', 
    icon: 'instagram',
    color: '#e1306c',
    hoverColor: '#c13584',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/500px-Instagram_icon.png' // Add this line
  },
  { 
    name: 'Messenger', 
    url: 'https://www.messenger.com/e2ee/t/6965654713500521/', 
    icon: 'facebook-messenger',
    color: '#0084ff',
    hoverColor: '#0066cc',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/1200px-Facebook_Messenger_logo_2020.svg.png' // Add this line
  },
  { 
    name: 'Email', 
    url: 'mailto:robertkhachaturovi@gmail.com', 
    icon: 'envelope',
    color: '#27746e',  // Changed from #ea4335 to #27746e
  hoverColor: '#1f5f5a',
    imageUrl: 'https://www.serif.ai/google/gmail/Google_Gmail_Logo_512px.png' // Add this line
  }
];

  closeModal() {
    this.close.emit();
  }

  getIconClass(icon: string): string {
    return `fab fa-${icon}`;
  }
}
