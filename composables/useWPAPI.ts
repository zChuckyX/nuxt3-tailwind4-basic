import { type Post } from '~~/types/post'

export default () => {
    const config = useRuntimeConfig();
    const WP_URL = config.public.urlKey;

    const get = async <T>(endpoint: string) => {
        return useFetch<T>(`${WP_URL}/wp-json/wp/v2/${endpoint}`)
    }

    const getPosts = async (category?: number, page: number = 1, perPage: number = 10) => {
        let query: string = `posts?page=${page}&per_page=${perPage}&_embed=1`
        
        if (category) {
            query += `&categories=${category}`;
        }

        return get<Post[]>(query);
    }

    const getCategory = async() => {
        return get<any>('categories');
    }

    const getSingleCategory = async(slug: string) => {
        return get<any>(`categories?slug=${slug}`);
    }

    const getDetail = async(slug: string) => {
        return get<Post[]>(`posts?slug=${slug}&_embed=1`);
    }

    return { getPosts, getCategory, getSingleCategory, getDetail };
}