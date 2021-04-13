import axios from 'src/http';

class MediaApi {
  async getMedia() {
    return await axios.get('/media');
  }
}

export { MediaApi };
