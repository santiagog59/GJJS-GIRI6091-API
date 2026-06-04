// ! Dealer no me acuerdo

import { create } from "domain";
import { Tasks } from "./tasks.entity";

export interface ITasksRepository {
    create(task: Tasks): Promise<Tasks>;
    findAll(): Promise<Tasks[]>;
    findById(id: string): Promise<Tasks | null>;

}

// ! Token para la inyección de dependencias
export const ITasksRepositoryToken = Symbol('ITasksRepository');