import { get } from './util/request'
interface ICourse {
    id?: string
    name?: string
    type?: string
    state?: string
    semesterId?: number
    stageId?: number
    subjectId?: number
}

export const course = {
    get: async (id: string): Promise<ICourse> => {
        return await get(`/courses/${id}`)
    },
}
