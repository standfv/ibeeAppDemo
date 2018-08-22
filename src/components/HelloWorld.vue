<template>
  <div>
    <div id="modal" class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-content" style="overflow: hidden;">
        <div class="box">
          <article class="media">
            <div class="media-content">
            <div class="content">
                <video style="min-width: 100%"></video>
            </div>
            </div>
          </article>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close"></button>
    </div>
     
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  name: 'HelloWorld',
  mounted(){
        var constraints = { audio: true, video: { width: 1280, height: 720 } }; 

        navigator.mediaDevices.getUserMedia(constraints)
        .then(function(mediaStream) {
          var video = document.querySelector('video');
          video.srcObject = mediaStream;
          video.onloadedmetadata = function(e) {
            video.play();
          };
        })
        .catch(function(err) { console.log(err.name + ": " + err.message); });
  }
}
</script>

<style scoped lang="scss">
.box {
    padding: 0rem;
}

.modal-card, .modal-content {
    margin: 0px !important;
    max-height: none !important;
    overflow: auto;
    position: relative;
    width: 100% !important;
}
</style>
