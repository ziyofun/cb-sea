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

export class Course extends base {
    public async get(id: string): Promise<ICourse> {
        return await this.getHttp(`/courses/${id}`)
    }
}
