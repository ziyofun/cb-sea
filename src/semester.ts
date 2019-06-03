import base from './base'
import { genQuery } from './util'

interface ISemester {
    id?: string
    name?: string
}

export class Semester extends base {
    /**
     *
     * @param page
     * @param size
     * return: 列表
     */
    public async getList({ page, size }: { page: number; size: number }): Promise<any> {
        return (await this.getHttp(`/subjects?${genQuery({ page, size })}`)) as ISemester[]
    }
}
