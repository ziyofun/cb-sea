import base from './base'

enum VedioType {
    Course = "course"
    //补充，目前视频类型只有课程course
}
enum VedioFormat {
    Mp4 = "mp4",
    Hls = "hls",

}
enum VedioClarity {
    // 高清
    High = "high",
    // 标清
    Middle = "middle",
    // 流畅
    Low = "low"
}
interface IVideo {
    // 视频ID
    id: string,
    // 原始ID
    originalId: string,
    // 视频类型，枚举值
    type: VedioType,
    // 标题时间，用于跳过片头
    titleTime: string,
    // 结束时间，用于跳过片尾
    finishTime: string,
    // 视频总时长
    duration: string,
    // 视频名称
    name: string,
    // 视频排序权重？
    order: number, // 补充 二级目标使用了这个字段，目前耳机目标已去除，故这个字段没有用处
    // 视频关键字
    // keywords: [待补充类型描述], //补充  未被用
    // 视频描述
    description: string,
    // 视频缩略图
    thumbnail: string,
    // 视频对应内容难度
    difficulty: number,
    // ----- 待注释 -----
    // parentId: [待补充类型描述],//补充：视频切片用到，指向原视频，现在已没有视频切片

    // 含义不明的几个字段
    // ----- 待注释 -----
    isVertical: false,//补充 竖版视频
    subtitleId: null,//补充 字幕id
    subtitleUrl: null,//补充 字幕url
    redirect: false,//补充 不清楚

    // 截屏？
    screenshots: [],//补充 就是截屏
    // 发布人，为什么是数值数组？
    publishers: number[],//补充 出版社，现在的版本已经去除
    // 
    status: boolean,
    // 学科
    subjectId: number,
    // 学段
    stageId: number,
    // 视频主链接
    url: string,
    // 视频备用链接
    urls: {
        // 备用视频ID
        id: string,
        // 视频ID的冗余字段
        videoId: string,
        // 备用视频地址
        url: string,
        // 备用视频适用平台
        platform: string,
        // 备用视频格式
        format: VedioFormat,
        // 备用视频质量
        clarity: VedioClarity,
        // 备用视频的哈希值
        md5:string
    }[]
}
export class Video extends base {
    /**
     *
     * @param id : video id
     * return: 视频详情
     */
    public async get(id: string): Promise<any> {
        return await this.getHttp(`/videos/${id}`) as IVideo 
    }
}
