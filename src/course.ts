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

interface ISubjectArray {
    [index: number]: ISubject
}

export class Course extends base {
    public async get(id: string): Promise<ICourse> {
        return await this.getHttp(`/courses/${id}`)
    }
    public async getTree(id: string): Promise<any> {
        return await this.getHttp(`/courses/tree/${id}`)
    }
    public async getTreeStruct(): Promise<ISubjectArray> {
        return await this.getHttp('/courses/treeStruct')
    }
}
