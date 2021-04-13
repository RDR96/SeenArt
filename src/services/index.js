import MediaService from './media';

class Services {
  media;

  constructor() {
    this.media = new MediaService();
  }
}

export default new Services();
