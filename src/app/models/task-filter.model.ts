export class TaskFilter {
    name?: string;
    tags?: string[];
    max?: number;

    constructor(params: any) {
        this.name = params.name;
        this.tags = params.tags;
        this.max = params.max;
    }
}

export class TaskSort {
    dir?: string;
    param?: string;

    constructor(params: any) {
        this.dir = params.dir;
        this.param = params.param;
    }
}

export class TaskSortFilter {
    filter?: TaskFilter;
    sort?: TaskSort;

    constructor(params: ITaskSortFilter) {
        this.filter = params.filter;
        this.sort = params.sort;
    }
}

export interface ITaskSortFilter {
    filter?: TaskFilter;
    sort?: TaskSort;
}

export enum SortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}