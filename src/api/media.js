import axios from 'src/http';
import postsAxios from 'src/http/posts';

class MediaApi {
  async getMedia() {
    return await axios.get('/media?parent=2474&per_page=50');
  }
}

class Images {
  async getImage(id) {
    return await axios.get(`/media/${id}`);
  }
}

class Posts {
  async getPosts(){
    return await postsAxios.get();
  }
}

export { MediaApi, Posts, Images};
