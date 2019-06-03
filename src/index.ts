import { Course } from './course'
import { Level } from './level'
import { Problem } from './problem'
import { Topic } from './topic'
import { Semester } from './semester'
import { Stage } from './stage'
import { Subject } from './subject'

import { IConfig } from './base'

export function CourseResource({ config }: { config: IConfig }) {
    return {
        course: new Course(config),
        level: new Level(config),
        subject: new Subject(config),
        stage: new Stage(config),
        topic: new Topic(config),
        problem: new Problem(config),
        semester: new Semester(config),
    }
}
