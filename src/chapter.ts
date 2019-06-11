import base from './base'
import { genQuery } from './util'
import { ITopic } from './topic'

interface ILevel {
    id?: string
    pId?: string
    courseId?: string
    relatedId?: string
    sort?: number
    type?: string
    relatedData?: any
}

export class Chapter extends base {
    /**
     * 获取某章节下的所有知识点
     * @param id : chapter id
     * return: 知识点数组
     */
    public async getAllTopicByChapterId(id: string): Promise<ITopic[]> {
        return (await this.getHttp(`/chapters/${id}/topics`)) as ITopic[]
    }

    /**
     * 使用层级接口获取章节详情
     * @param id : level id
     * return: 章节详情
     */
    public async get(id: string): Promise<ILevel> {
        return (await this.getHttp(`/levels/${id}`)) as ILevel
    }
    /**
     * 使用层级接口获取章节列表
     * @param pId : 父级id
     * @param courseId : 课程id
     * return: 章节列表
     */
    public async getList({ pId, courseId }: { pId: string; courseId: string }): Promise<any> {
        return (await this.getHttp(`/levels?${genQuery({ pId, courseId })}`)) as ILevel[]
    }
}
