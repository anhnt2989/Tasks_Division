import {Task} from './task';

export interface Project {
  tasks: Task[];
  status: boolean;
  title: string;
  content: string;
}
