import base from './base'
import { IProblem } from './problem'
import { genQuery } from './util'

interface IVideo {
    url?: string
    name?: string
    id?: string
}

interface ITopic {
    id?: string
    name?: string
    pay?: string
    type?: string
    description?: string
    videoId?: string
    video?: IVideo
    problemIdsGroup?: string[][]
}

export class Topic extends base {
    /**
     *
     * @param id : topic id
     * return: 知识点详情
     */
    public async get(id: string): Promise<ITopic> {
        return await this.getHttp(`/topics/${id}`)
    }
    /**
     *
     * @param id : 知识点id
     * return: 知识点下习题列表
     */
    public async getTopicProblemList({ id }: { id: string }): Promise<any> {
        return (await this.getHttp(`/topics/${id}/practices`)) as IProblem[]
    }
}
