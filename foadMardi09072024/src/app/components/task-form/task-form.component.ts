import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {
  newTaskForm: FormGroup = this.formB.group({
    title: ['', [Validators.required, Validators.minLength(2)]],
    description: ['', [Validators.required, Validators.minLength(10)]],
  });

  submitted: boolean = false;

  constructor(private formB: FormBuilder) {}

  @Output()
  ajoutTache: EventEmitter<Task> = new EventEmitter();

  addTask() {
    this.ajoutTache.emit(this.newTaskForm.value);
    console.log(this.newTaskForm.value);
    this.newTaskForm.reset();
    this.submitted = false;
  }

  onSubmit(): boolean {
    //on passe submitted à true
    this.submitted = true;
    //appel du validateur 'invalid' pour lancer la vérif
    if (this.newTaskForm.invalid) {
      return false;
    } else {
      //si tout est ok, on appelle la fonction pour ajouter le produit
      this.addTask();
      return true;
    }
  }

  get form() {
    return this.newTaskForm.controls;
  }
}
