import { Component, signal } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  ɵInternalFormsSharedModule,
} from "@angular/forms";
import { CardModule } from "primeng/card";

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [CardModule, ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: "./contact.component.html",
  styleUrl: "./contact.component.scss",
})
export class ContactComponent {
  showSuccess = signal(false);
  form = new FormGroup({
    email: new FormControl("", {
      validators: [Validators.email, Validators.required],
    }),
    message: new FormControl("", {
      validators: [Validators.required, Validators.maxLength(300)],
    }),
  });

  get isEmailInvalid() {
    return (
      this.form.controls.email.touched &&
      this.form.controls.email.dirty &&
      this.form.controls.email.invalid
    );
  }

  get isMessageInvalid() {
    return (
      this.form.controls.message.touched &&
      this.form.controls.message.dirty &&
      this.form.controls.message.invalid
    );
  }

  onSubmit() {
    this.form.reset();
    this.showSuccess.set(true);
    setTimeout(() => this.showSuccess.set(false), 3000);
  }
}
