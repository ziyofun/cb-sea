import base from './base'
import { genQuery } from './util'

interface IStage {
    id?: string
    name?: string
}

export class Stage extends base {
    /**
     *
     * @param page
     * @param size
     * return: 列表
     */
    public async getList({ page, size }: { page: number; size: number }): Promise<any> {
        return (await this.getHttp(`/subjects?${genQuery({ page, size })}`)) as IStage[]
    }
}
