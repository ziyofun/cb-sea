import { Course } from './course'
import { Level } from './level'
import { IConfig } from './base'

export function CourseResource({ config }: { config: IConfig }) {
    return {
        course: new Course(config),
        level: new Level(config),
    }
}
