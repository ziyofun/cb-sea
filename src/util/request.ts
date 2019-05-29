import config from '../config'
import request from 'request'

export function get(path: string) {
    return new Promise((resolve, reject) => {
        request.get(`${config.cb.host}:${config.cb.port}${path}`, (err, response, body) => {
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

export function post(path: string, data: any) {
    return new Promise((resolve, reject) => {
        request(
            {
                method: 'POST',
                uri: `${config.cb.host}:${config.cb.port}${path}`,
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
