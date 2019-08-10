import {Project} from './project';

export interface Task {
  id: number;
  title: string;
  status: boolean;
  content: string;
}
