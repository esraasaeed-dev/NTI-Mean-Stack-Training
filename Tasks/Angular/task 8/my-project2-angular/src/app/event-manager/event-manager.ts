import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-event-manager',
  imports: [FormsModule],
  templateUrl: './event-manager.html',
  styleUrl: './event-manager.css',
})
export class EventManager {

  eventName = ''
  eventCategory = ''


  events = [
    {
      id: 1,
      name: 'Summer Concert',
      category: 'Music',
      soldOut: false
    },
    {
      id: 2,
      name: 'Tech Workshop',
      category: 'Technology',
      soldOut: true
    },
    {
      id: 3,
      name: 'Wedding Party',
      category: 'Celebration',
      soldOut: false
    }
  ];


  addEvent(){
    if (this.eventName && this.eventCategory){
      this.events.push({
        id: this.events.length + 1,
        name: this.eventName,
        category: this.eventCategory,
        soldOut: false
      });

      this.eventName = '';
      this.eventCategory = '';
    }

  }

}
