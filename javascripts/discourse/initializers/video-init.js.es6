import {withPluginApi} from 'discourse/lib/plugin-api';

let windowObjectReference;
let windowFeatures = "popup";

function openRequestedPopup() {
  windowObjectReference = window.open(
    "https://help.kickmakers.fr/pub/video-how-to-add-sharepoint-video",
    "howtoaddvideoWindow",
    windowFeatures,
  );
}

export default {
  name: 'video-init',
  initialize (container) {
    withPluginApi ('0.8.40', api => {
      const hasAlpha = /(.,){3}|\//;
      const MAX_LENGTH = 25;

      api.onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "video_how_button",
          group: "extras",
          icon: "video",
          title: themePrefix('composer.video_howto_button_title'),
          perform: e => openRequestedPopup()
        });
      });

    })
  }
}
