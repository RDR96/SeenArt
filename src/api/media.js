import axios from 'src/http';

class MediaApi {
  async getMedia() {
    return await axios.get('/media?per_page=40');
  }
}

export { MediaApi };
