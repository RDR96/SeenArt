import axios from 'src/http';

class MediaApi {
  async getMedia() {
    return await axios.get('/media?parent=2474&per_page=50');
  }
}

export { MediaApi };
