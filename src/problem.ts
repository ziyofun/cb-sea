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
    explains?: IExplains[]
    prompts?: string[]
    source?: string,
    frequency?: number,
    choices?: IChoice[][]
    difficulty?: '0' | '55' | '65' | '75' | '85' | '95'
    audioUrl?: string
    advice?: string
    screenshots?: string[]
    scenes?: string,
    tags?: string[],
    extendedBlanks?: string[][]
    blanksGroup?: number[][]
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
