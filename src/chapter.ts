import base from './base'
import { ITopic } from './topic'

export class Chapter extends base {
    /**
     * 获取某章节下的所有知识点
     * @param id : chapter id
     * return: 知识点数组
     */
    public async getAllTopicByChapterId(id: string): Promise<ITopic> {
        return await this.getHttp(`/chapters/${id}/topics`)
    }
}
