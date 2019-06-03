import { Course } from './course'

export function cb({ config }: { config: any }) {
    return {
        course: new Course(config),
    }
}
