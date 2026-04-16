import { Component } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true, // Angular 17+ default
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  public sendEmail(e: Event) {
    e.preventDefault();
    const serviceID = 'service_2rr1g4e';
    const templateID = 'template_aulj0vn';
    const publicKey = 'DrBSTnbqoSWdUtCC4';

    emailjs.sendForm(serviceID, templateID, e.target as HTMLFormElement, publicKey)
      .then((result: EmailJSResponseStatus) => {
        console.log('SUCCESS!', result.status, result.text);
        alert('Email Sent Successfully.');
        (e.target as HTMLFormElement).reset(); // Form clear karne ke liye
      }, (error) => {
        console.log('FAILED...', error);
        alert('Email Not Sent');
      });
  }
}