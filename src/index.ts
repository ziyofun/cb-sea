import { Course } from './course'
import { Problem } from './problem'
import { Chapter } from './chapter'
import { Topic } from './topic'
import { Semester } from './semester'
import { Stage } from './stage'
import { Subject } from './subject'
import { Video } from './video'

import { IConfig } from './base'

export function CourseResource({ config }: { config: IConfig }) {
    return {
        course: new Course(config),
        chapter: new Chapter(config),
        subject: new Subject(config),
        stage: new Stage(config),
        topic: new Topic(config),
        problem: new Problem(config),
        semester: new Semester(config),
        video: new Video(config),
    }
}
