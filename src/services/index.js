import MediaService from './media';
import PostsService from './posts';


class Services {
  media;
  posts;

  constructor() {
    this.media = new MediaService();
    this.posts = new PostsService();
  }
}

export default new Services();
