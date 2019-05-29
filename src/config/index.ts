import developmentConfig from './development'
import productionConfig from './production'

const env = process.env.NODE_ENV
let config = developmentConfig

if (env === 'production') {
    config = productionConfig
}

export default {
    ...config,
}
