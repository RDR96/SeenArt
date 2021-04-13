import API from 'src/api';

class MediaService {
  async getMedia() {
    const media = await API.media.getMedia();

    return media.data.map(item => ({
      image: item.source_url,
      name: item.slug
    }));
  }
}

export default MediaService;
