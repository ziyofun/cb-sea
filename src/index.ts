import { Course } from './course'

export default function({ config }: { config: any }) {
    return {
        course: new Course(config),
    }
}
