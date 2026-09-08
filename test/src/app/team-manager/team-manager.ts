import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-team-manager',
  imports: [FormsModule],
  templateUrl: './team-manager.html',
  styleUrl: './team-manager.css'
})
export class TeamManagerComponent {

  viewMode: 'card' | 'list' = 'card';

  departments = [
    'Development',
    'Marketing',
    'Design'
  ];

  selectedDept = 'All';

  newMember = {
    name: '',
    age: 0,
    department: this.departments[0],
    isAvailable: true
  };

  team = [
    {
      name: 'Esraa',
      age: 24,
      department: 'Development',
      isAvailable: true
    },
    {
      name: 'Ahmed',
      age: 29,
      department: 'Marketing',
      isAvailable: false
    },
    {
      name: 'Laila',
      age: 31,
      department: 'Design',
      isAvailable: true
    }
  ];

  addMember() {
    if (
      this.newMember.name &&
      this.newMember.age &&
      this.newMember.department
    ) {
      this.team.push({ ...this.newMember });

      this.newMember = {
        name: '',
        age: 0,
        department: this.departments[0],
        isAvailable: true
      };
    }
  }

  toggleAvailability(member: any) {
    member.isAvailable = !member.isAvailable;
  }

}