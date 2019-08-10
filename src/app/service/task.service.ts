import {Injectable} from '@angular/core';
import {Task} from '../model/task';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class TaskService {
  taskList: Task[] = [];
  private readonly API_URL = 'https://my-json-server.typicode.com/kennylam91/test-task-list-restapi/tasks';

  constructor(private http: HttpClient) {
  }

  getTasks(count = 10): Observable<Task[]> {
    return this.http.get<Task[]>(this.API_URL).pipe(
      map(response => response.filter((task, i) => i < count))
    );
  }
  getTaskById(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.API_URL}/${id}`);
  }
  createTask(task: Partial<Task>): Observable<Task> {
    return this.http.post<Task>(this.API_URL, task);
  }
  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
  updateTask(task: Task): Observable<Task> {
    return this.http.patch<Task>(`${this.API_URL}/${task.content}`, task);
  }
}
