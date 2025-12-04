import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './components/user/user';
import { Admin } from './components/admin/admin';
import { DataBinding } from './components/data-binding/data-binding';
import { Signal } from './components/signal/signal';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,User,Admin,DataBinding,Signal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular21');
}
