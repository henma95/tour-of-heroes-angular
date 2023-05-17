import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messagess.component.html',
  styleUrls: ['./messagess.component.css']
})
export class MessagesComponent {

  constructor(public messageService: MessageService) {}

}