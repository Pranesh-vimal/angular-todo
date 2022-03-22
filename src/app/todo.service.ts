import { Todo } from './Todo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {
//   AngularFireDatabase,
//   AngularFireList,
//   AngularFireObject,
// } from '@angular/fire/compat/database';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  // todosRef: AngularFireList<any>;
  // todoRef: AngularFireObject<any>;

  private url = 'https://todo-angular-78078-default-rtdb.firebaseio.com/todos';

  private subjectTodos = new Subject<Todo[]>();
  todoSource = this.subjectTodos.asObservable();

  todos: Todo[] = [];

  // constructor(private db: AngularFireDatabase) {}

  constructor(private http: HttpClient) {}

  async getTodos() {
    // this.todosRef = this.db.list('todos');
    // this.todosRef.snapshotChanges().subscribe((snapshots) => {
    //   this.todos = [];
    //   snapshots.forEach((snapshot) => {
    //     const todo = snapshot.payload.val();
    //     todo.id = snapshot.key;
    //     this.todos.push(todo);
    //   });
    //   this.subjectTodos.next(this.todos);
    // });

    this.http.get<Todo[]>(`${this.url}.json`).subscribe((data) => {
      this.todos = [];
      if (data) {
        this.todos = Object.keys(data).map((key: any) => {
          data[key].id = key;
          return data[key];
        });
      }
      this.subjectTodos.next(this.todos);
    });
  }

  async addTodo(todo: String) {
    // this.todosRef = this.db.list('todos');
    // this.todosRef.push({
    //   title: todo,
    //   completed: false,
    // });

    let todoItem = {
      title: todo,
      completed: false,
      created_at: new Date().toISOString(),
    };

    this.http.post(`${this.url}.json`, todoItem).subscribe((data) => {
      if (data) {
        this.getTodos();
      }
    });
  }

  changeStatus(todo: any): void {
    // this.todoRef = this.db.object('todos/' + todo.id);
    // this.todoRef.update({
    //   completed: !todo.completed,
    // });

    let todoItem = {
      title: todo.title,
      completed: !todo.completed,
    };

    this.http
      .patch(`${this.url}/${todo.id}.json`, todoItem)
      .subscribe((data) => {
        if (data) {
          this.getTodos();
        }
      });
  }

  async deleteTodo(todo: Object) {
    // this.todoRef = this.db.object('todos/' + id);
    // this.todoRef.remove();

    this.http.delete(`${this.url}/${todo}.json`).subscribe((data) => {
      if (!data) {
        this.getTodos();
      }
    });
  }
}
