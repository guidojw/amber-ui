import { ApplicationRoute } from 'alpha-amber/routes/application/application';

export default class PhotosIndexRoute extends ApplicationRoute {
  get breadCrumb() {
    return { title: this.controller.model.title };
  }

  get pageActions() {
    const photoAlbum = this.controller.model;
    return [
      {
        link: 'photo-albums.photo-album.edit',
        title: 'Wijzigen',
        icon: 'pencil',
        linkArgument: this.controller.model.photoAlbum,
        canAccess: this.abilities.can('edit photo-albums', photoAlbum),
      },
      {
        link: 'photo-albums.photo-album.destroy',
        title: 'Verwijderen',
        icon: 'trash',
        linkArgument: this.controller.model.photoAlbum,
        canAccess: this.abilities.can('destroy photo-albums'),
      },
    ];
  }

  canAccess() {
    return this.abilities.can('show photo-albums');
  }

  model() {
    return this.modelFor('photo-albums.photo-album');
  }
}
