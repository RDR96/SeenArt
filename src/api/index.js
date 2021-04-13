import { MediaApi } from './media';

class Api {
  media;

  constructor() {
    this.media = new MediaApi();
  }
}

export default new Api();
