import axios from "axios";

const BASE_URL = 'https://jsonplaceholder.typicode.com'

class PostService {

    static async getPosts(): Promise<any[]> {
        const response = await axios.get(BASE_URL + '/posts');

        if(response.status !== 200) {
            throw new Error(response.statusText);
        }

        return response.data;
    }

}

export default PostService;