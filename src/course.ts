import base from './base'
import { genQuery } from './util'
interface ICourse {
    id?: string
    name?: string
    type?: string
    state?: string
    semesterId?: number
    stageId?: number
    subjectId?: number
    subjectName?: string
    stageName?: string
    semesterName?: string
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
    /**
     *
     * @param id : 课程id
     *
     */
    public get(id: string): Promise<ICourse> {
        return this.getHttp(`/courses/${id}`)
    }
    /**
     *
     * @param subjectId : 学科id
     * @param stageId : 学段id
     * @param semesterId : 学期id
     * @param param type : 课程类型
     * return: 课程列表
     */
    public async getList({
        subjectId,
        stageId,
        semesterId,
        type,
    }: {
        subjectId: string
        stageId: string
        semesterId: string
        type: 'system' | 'special'
    }): Promise<any> {
        return (await this.getHttp(`/levels?${genQuery({ subjectId, stageId, semesterId, type })}`)) as ICourse[]
    }
    /**
     *
     * @param id : 课程id
     * return: 课程结构（包括课程下的章，大节，小节，知识点）
     *
     */
    public getTree(id: string): Promise<any> {
        return this.getHttp(`/courses/tree/${id}`)
    }
    /**
     * return: 学科学段学期树形结构
     */
    public async getTreeStruct() {
        return (await this.getHttp('/courses/treeStruct')) as ISubject[]
    }
}
