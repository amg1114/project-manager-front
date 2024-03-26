import { TaskI } from "./task.interface";

export interface WorkflowStatusI {
    id:          number;
    createdAt:   string;
    updatedAt:   string;
    title:       string;
    description: null;
    state:       string;
    order:       number;
    tasks:       TaskI[];
}