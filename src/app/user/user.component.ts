import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) id!: string;
  @Output() select = new EventEmitter<string>();
  // select = output<string>(); 
  // Signal Input: To input values
  // avatar = input.required<string>();
  // name = input.required<string>();
  // id = input.required<string>();

  // Signal based getter method - computed()
  // imagePath = computed(() => '../../assets/users/' + this.avatar());

  get imagePath() {
    return '../../assets/users/' + this.avatar;
  }

  onSelectUser() {
    this.select.emit(this.id);
  }
}
