import {Component, OnInit} from '@angular/core';
import {Task} from '../../model/task';
import {TaskService} from '../../service/task.service';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})
export class TaskManagerComponent implements OnInit {
  tasks: Task[];

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.taskList;
  }

  ngOnInit() {
    this.taskService
      .getTasks()
      .subscribe(next => (this.tasks = next), error => (this.tasks = []));
  }

}
