// Generated by https://quicktype.io

import { ProjectI } from "./project.interface";

export interface TaskI {
    id:          number;
    createdAt:   string;
    updatedAt:   string;
    title:       string;
    description: null;
    project?:    ProjectI;
}
