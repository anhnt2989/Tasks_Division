import {Component, OnInit} from '@angular/core';
import {Task} from '../../model/task';
import {TaskService} from '../../service/task.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})
export class TaskManagerComponent implements OnInit {
  tasks: Task[];
  todo = [];
  done = [];
  doing = [];
  reviewing = [];

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.taskList;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  ngOnInit() {
    this.taskService
      .getTasks()
      .subscribe( result => {
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < result.length; i++) {
          this.todo.push(result[i].title);
        }
      });
  }
}
