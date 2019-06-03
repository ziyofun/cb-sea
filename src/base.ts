import request from 'request'

interface IConfig {
    host?: string
    port?: string
}

export default class  {
    constructor(config?: IConfig){
        this.config = config
    }
    public config: any
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