import { TeamManagerComponent } from './team-manager/team-manager';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet, TeamManagerComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('my-app');
  protected readonly teamManager = new TeamManagerComponent();
}
