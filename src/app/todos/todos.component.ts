import { Todo } from './../Todo';
import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todo: String = '';

  todos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos();
    this.todoService.todoSource.subscribe((todos) => {
      this.todos = todos;
    });
  }

  addTodo(): void {
    if (this.todo.length == 0) {
      return;
    }

    this.todoService.addTodo(this.todo);
    this.todo = '';
  }

  changeStatus(id: Object): void {
    this.todoService.changeStatus(id);
  }

  deleteTodo(id: Object): void {
    this.todoService.deleteTodo(id);
  }
}
