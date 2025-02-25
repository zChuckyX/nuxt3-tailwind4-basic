export default defineEventHandler((event) => {

    const config = useRuntimeConfig();

    const secret = config.secretKey;

    return {
        message: 'Hello Nuxt 3 API.',
        secret: secret
    }
});