import { Todo } from './../Todo';
import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  count: Number = 0;
  pending: Number = 0;
  completed: Number = 0;

  ngOnInit(): void {
    this.todoService.todoSource.subscribe((todos) => {
      this.count = todos.length;
      this.pending = todos.filter((todo: Todo) => !todo.completed).length;
      this.completed = todos.filter((todo: Todo) => todo.completed).length;
    });
  }
}
