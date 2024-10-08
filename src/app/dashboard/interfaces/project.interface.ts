// Generated by https://quicktype.io

import { TeamI } from "./team.interface";

export interface ProjectI {
    id:                   number;
    createdAt:            string;
    updatedAt:            string;
    title:                string;
    slug:                 string;
    description:          null;
    team?:                 TeamI;
}