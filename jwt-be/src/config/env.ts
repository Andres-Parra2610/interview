import * as joi from 'joi'

interface Envs {
  PORT: number
  JWT_SECRET: string
  DB_HOST: string
  DB_PORT: number
  DB_USER: string
  DB_PASSWORD: string
  DB_NAME: string
}
const envSchema = joi
  .object({
    PORT: joi.number().required(),
    JWT_SECRET: joi.string().required(),
    DB_HOST: joi.string().required(),
    DB_PORT: joi.number().required(),
    DB_USER: joi.string().required(),
    DB_PASSWORD: joi.string().required(),
    DB_NAME: joi.string().required(),
  })
  .unknown(true)

const { error, value } = envSchema.validate(process.env)
if (error) throw new Error('Config validation issue ' + error.message)

export const env: Envs = value
