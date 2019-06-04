import base from './base'

enum VedioType {
    Course = 'course',
}
enum VedioFormat {
    Mp4 = 'mp4',
    Hls = 'hls',
}
enum VedioClarity {
    High = 'high',
    Middle = 'middle',
    Low = 'low',
}
interface IVideoUrl {
    id: string
    videoId: string
    url: string
    platform: string
    format: VedioFormat
    clarity: VedioClarity
    md5: string
}
interface IVideo {
    id: string
    originalId: string
    type: VedioType
    titleTime: string
    finishTime: string
    duration: string
    name: string
    order: number
    description: string
    thumbnail: string
    difficulty: number
    isVertical: false
    subtitleId: null
    subtitleUrl: null
    redirect: false
    screenshots: []
    publishers: number[]
    status: boolean
    subjectId: number
    stageId: number
    url: string
    urls: IVideoUrl[]
}
export class Video extends base {
    /**
     *
     * @param id : video id
     * return: 视频详情
     */
    public async get(id: string): Promise<any> {
        return (await this.getHttp(`/videos/${id}`)) as IVideo
    }
}
