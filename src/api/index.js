import { MediaApi, Posts, Images } from './media';

class Api {
  media;
  posts;
  images;
  constructor() {
    this.media = new MediaApi();
    this.posts = new Posts();
    this.images = new Images();
  }
}

export default new Api();
