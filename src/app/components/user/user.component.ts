import { Component, computed, EventEmitter, Input, input, output, Output, signal } from '@angular/core';
import { DUMMY_USERS } from '../../utils/dummy-data';
import { User } from './user.model';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  imports: [CardComponent],
  selector: 'app-user',
  styleUrl: './user.component.scss',
  templateUrl: './user.component.html',
})
export class UserComponent {
  // Option 1 to update state
  // randomUser = DUMMY_USERS[1]

  // get imagePath() {
  //   return 'users/' + this.randomUser.avatar
  // }


  // onSelectUser(this: any) {

  //   const randomImage = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.randomUser = DUMMY_USERS[randomImage]
  //   console.log(DUMMY_USERS[randomImage])
  // }

  // option 2 to update state using signals

  // randomUser = signal(DUMMY_USERS[1])
  // imagePath = computed(() => 'users/' + this.randomUser().avatar)

  // onSelectUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.randomUser.set(DUMMY_USERS[randomIndex])
  // }

  // back to black
  // simple decorator
  // @Input() public avatar!: string;
  // @Input({ required: true }) public name!: string;
  // @Input() public id!: string;

  @Input({required: true}) user!: User
  @Input() isSelected?: boolean = false;
  // decorator type
  @Output() selectedUser = new EventEmitter<string>()

  // modern way
  // selectedUser = output<string>()

  get imagePath() {
    return 'users/' + this.user.avatar
  }

  onUserSelect() {
    this.selectedUser.emit(this.user.id)
  }

  // with signal
  // avatar = input.required<string>()
  // name = input.required<string>()
  // id = input.required<string>()
  // imagePath = computed(() => 'users/' + this.avatar())
}
