export function genQuery(obj: { [propName: string]: string | number | undefined | object | null }): string {
    let str = ''
    for (const k in obj) {
        if (obj[k] !== null && obj[k] !== undefined) {
            str += `&${k}=${obj[k]}`
        }
    }
    return str.replace(/^&/, '')
}
