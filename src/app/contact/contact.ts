import { Component, ChangeDetectorRef } from '@angular/core'; // ChangeDetectorRef add kiya
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [], 
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  public isLoading: boolean = false;
  public isSuccess: boolean = false;

  // Constructor me inject karein
  constructor(private cdr: ChangeDetectorRef) {}

  public async sendEmail(e: Event) {
    e.preventDefault();
    if (this.isLoading) return;

    this.isLoading = true;
    const form = e.target as HTMLFormElement;

    const serviceID = 'service_2rr1g4e';
    const templateID = 'template_aulj0vn';
    const publicKey = 'DrBSTnbqoSWdUtCC4';

    try {
      await emailjs.sendForm(serviceID, templateID, form, publicKey);
      
      this.isSuccess = true;
      form.reset();
      
      // Forcefully Angular ko bolo UI update kare
      this.cdr.detectChanges();

      setTimeout(() => {
        this.isSuccess = false;
        this.cdr.detectChanges(); // Yahan bhi update check karein
      }, 5000);

    } catch (error) {
      console.error('FAILED...', error);
      alert('Error: Check Console');
    } finally {
      this.isLoading = false;
      this.cdr.detectChanges(); // Loader stop hote hi UI refresh
    }
  }
}