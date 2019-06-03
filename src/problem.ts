import base from './base'
import { genQuery } from './util'

interface IExplains {
    body?: string
    jump?: number
    title?: string
    videoId?: string
    videoName?: string
}

interface IChoice {
    body?: string
    correct?: boolean
}

export interface IProblem {
    id?: string
    pId?: string
    purpose?: 'exam' | 'practice' | 'class'
    type?: 'single_choice' | 'multi_blank' | 'hybrid' | 'exam'
    body?: string
    explains?: Array<IExplains>
    prompts?: Array<string>
    source?: string,
    frequency?: number,
    choices?: Array<Array<IChoice>>
    difficulty?: '0' | '55' | '65' | '75' | '85' | '95'
    audioUrl?: string
    advice?: string
    screenshots?: Array<string>
    scenes?: string,
    tags?: Array<string>,
    extendedBlanks?: Array<Array<string>>
    blanksGroup?: Array<Array<number>>
}

export class Problem extends base {
    /**
     * 
     * @param id : problem id
     * return: 习题详情
     */
    public async get(id: string): Promise<IProblem> {
        return await this.getHttp(`/problems/${id}`)
    }
    // /**
    //  * 
    //  * @param pId : 父级id
    //  * @param courseId : 课程id
    //  * return: 习题列表
    //  */
    // public async getList({pId, courseId} : { pId: string, courseId: string }): Promise<any> {
    //     return await this.getHttp(`/levels?${genQuery({pId, courseId})}`) as ILevel[]
    // }
}
