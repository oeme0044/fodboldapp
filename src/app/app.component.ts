import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Premier League', url: '/pages/premier-league', icon: 'mail' },
    { title: 'La Liga', url: '/pages/la-liga', icon: 'paper-plane' },
    { title: 'Seria A', url: '/pages/serie-a', icon: 'heart' },
  
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
