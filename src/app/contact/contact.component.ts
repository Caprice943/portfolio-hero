import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  submitting = false;
  contactMail = "heredyamouiri@gmail.com";
  contactLocation = "France";
  today = new Date();

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  constructor(private fb: FormBuilder) {}

  get f() { return this.form.controls; }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitting = true;

    const name = encodeURIComponent(this.f.name.value || '');
    const email = encodeURIComponent(this.f.email.value || '');
    const message = encodeURIComponent(this.f.message.value || '');

    const subject = encodeURIComponent(`Contact portfolio – ${name}`);
    const body = encodeURIComponent(
      `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    // Ouvre le client mail de l'utilisateur
    window.location.href = `mailto:ton.email@exemple.com?subject=${subject}&body=${body}`;

  
    setTimeout(() => {
      this.submitting = false;
      this.form.reset();
    }, 300);
  }

}
