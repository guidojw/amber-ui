import { ApplicationRoute } from 'alpha-amber/routes/application/application';

export default class ShowPhotoAlbumRoute extends ApplicationRoute {
  canAccess() {
    return this.abilities.can('show photo-albums');
  }

  beforeModel() {
    this.transitionTo('photo-albums.photo-album.photos');
  }
}
