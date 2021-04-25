import API from 'src/api';

class MediaService {
  async getMedia() {
    const media = await API.media.getMedia();

    return media.data.map(item => ({
      image: item.source_url,
      name: item.slug
    }));
  }

  async getImages(id){
    const image = await API.images.getImage(id);

    return image.data.link;
  }
}

export default MediaService;
