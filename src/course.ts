import base from './base'

interface ICourse {
    id?: string
    name?: string
    type?: string
    state?: string
    semesterId?: number
    stageId?: number
    subjectId?: number
}
interface ISemester {
    id?: number
    name?: string
}
interface IStage {
    id?: number
    name?: string
    childs?: ISemester[]
}
interface ISubject {
    id?: number
    name?: string
    childs?: IStage[]
}

export class Course extends base {
    public get(id: string): Promise<ICourse> {
        return this.getHttp(`/courses/${id}`)
    }
    public getTree(id: string): Promise<any> {
        return this.getHttp(`/courses/tree/${id}`)
    }
    public async getTreeStruct() {
        return (await this.getHttp('/courses/treeStruct')) as ISubject[]
    }
}
