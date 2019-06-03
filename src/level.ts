import base from './base'
import { genQuery } from './util'

interface IBaseRelated {
    id?: string
    name?: string
}

interface ILevel {
    id?: string
    pId?: string
    courseId?: string
    relatedId?: string
    sort?: number
    type?: string
    relatedData?: any
}

export class Level extends base {
    /**
     *
     * @param id : level id
     * return: 层级详情
     */
    public async get(id: string): Promise<ILevel> {
        return await this.getHttp(`/levels/${id}`)
    }
    /**
     *
     * @param pId : 父级id
     * @param courseId : 课程id
     * return: 层级列表
     */
    public async getList({ pId, courseId }: { pId: string; courseId: string }): Promise<any> {
        return (await this.getHttp(`/levels?${genQuery({ pId, courseId })}`)) as ILevel[]
    }
}
