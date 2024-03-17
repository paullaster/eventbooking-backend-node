export default {
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    username: process.env.MAIL_USERNAME,
    password: process.env.MAIL_PASSWORD,
    security: process.env.MAIL_SECURITY,
    from: process.env.MAIL_FROM,
}