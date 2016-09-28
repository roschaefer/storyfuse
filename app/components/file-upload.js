import Ember from 'ember';
import EmberUploader from 'ember-uploader';

export default EmberUploader.FileField.extend({
  filesDidChange: function(files) {
    let url = 'https://upload.clyp.it/upload';
    //let url = 'https://a.clyp.it/zfei2qca.mp3';



    let playlistId = 'bcmgmwr5';
    let playlistUploadToken = '5e0993aa4175a6fcddbc7326ea940165';
    let createAction = this.get('createAction');



    const uploader = EmberUploader.Uploader.create({ url });

    if (!Ember.isEmpty(files)) {
      // this second argument is optional and can to be sent as extra data with the upload
      uploader.upload(files[0], {playlistId, playlistUploadToken}).then((data) => {
        let attrs = {
          title: data.Title,
          url: 'https://a.clyp.it/' + data.AudioFileId + '.mp3'
        };
        createAction(attrs);
      });
    }

  }
});
