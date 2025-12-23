import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { ContactModalComponent } from '../contact-modal/contact-modal';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, ContactModalComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  name = 'Robert Khachaturov';
  showContactModal = false;
  isMenuOpen = false;
  currentRoute: string = '/';
  isBrowser: boolean;
  window: any;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.window = window;
    }
  }

  ngOnInit() {
    this.currentRoute = this.router.url;
    
    // Subscribe to route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.currentRoute = event.url;
    });
  }

  ngOnDestroy() {
    // Clean up if needed
  }

  isOnHomePage(): boolean {
    return this.currentRoute === '/' || this.currentRoute === '/home';
  }

  scrollToSkills(event: Event) {
    event.preventDefault();
    this.closeMenu();
    
    if (this.isOnHomePage()) {
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        skillsSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      this.router.navigate(['/home']).then(() => {
        // Wait for the home page to load and then scroll to skills
        const checkSection = setInterval(() => {
          const skillsSection = document.getElementById('skills');
          if (skillsSection) {
            clearInterval(checkSection);
            skillsSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
        
        // Timeout after 2 seconds to prevent infinite checking
        setTimeout(() => clearInterval(checkSection), 2000);
      });
    }
  }
  
  navigateTo(route: string, event: Event) {
    event.preventDefault();
    this.closeMenu();
    this.router.navigate([route]);
  }

  openContactModal() {
    this.showContactModal = true;
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  }

  closeContactModal() {
    this.showContactModal = false;
    document.body.style.overflow = 'auto';
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : 'auto';
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = 'auto';
  }
}
