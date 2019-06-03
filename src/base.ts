import request from 'request'

export interface IConfig {
    host?: string
    port?: string
}
export default class {
    public config?: any
    constructor(config?: IConfig) {
        this.config = config
    }
    getHttp(path: string) {
        return new Promise((resolve, reject) => {
            request.get(`${this.config.host}:${this.config.port}${path}`, (err, response, body) => {
                if (err) {
                    return reject(err)
                }
                try {
                    resolve(body)
                } catch (e) {
                    reject(e)
                }
            })
        })
    }
    postHttp(path: string, data: any) {
        return new Promise((resolve, reject) => {
            request(
                {
                    method: 'POST',
                    uri: `${this.config.host}:${this.config.port}${path}`,
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(data),
                },
                (err, response, body) => {
                    if (err) {
                        return reject(err)
                    }
                    try {
                        resolve(body)
                    } catch (e) {
                        reject(e)
                    }
                },
            )
        })
    }
}
