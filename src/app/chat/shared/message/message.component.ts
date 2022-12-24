import {Component} from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  user =
    {
      image: "https://media.istockphoto.com/id/691910449/photo/smiling-businessman-with-smart-phone-and-cup.jpg?s=612x612&w=0&k=20&c=xtKhWCfPYZrRjIs3cA_yFnxx3tx8CylnSt9knxib3qk=",
      name: "Jake Reilly",
      description: "Hello, Peter! I would like to order an commission.",
      last_visit: "01.02.2022",
      status: "active",

    }
}
