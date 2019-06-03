import { Course } from './course'
import { IConfig } from './base'

export function CourseResource({ config }: { config: IConfig }) {
    return {
        course: new Course(config),
    }
}
