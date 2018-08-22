<template>
    <div class="GlobalViews">
        <div class="Views">
            <video id="gum-local" autoplay playsinline class="MainCamera">
            </video>
            <div class="navbar flex justify-between">
                <a class="flex-1 text-grey-dark py-3 m-2" style="cursor:pointer; text-align: left; padding-left: 13px;"> <img :src="IconSwitchCamera" style="width: 26px; ;position: relative; top: 3px;"/> </a>
                <a class="flex-4 text-grey-dark py-3 m-2"><p style=" font-weight: 600;
                background: rgba(255, 5, 5, 0.57);
                color: rgb(255, 255, 255);
                border-radius: 19px;
                padding: 9px 10px;
                position: relative;
                top: -3px;
                font-size: 14px;
                user-select: none;">CHUẨN BỊ TRỰC TIẾP</p></a>
                <a @click="CloseLiveStreamApp"class="flex-1 text-grey-dark py-3 m-2" style="cursor:pointer; text-align: right; padding-right: 13px;"> <img :src="IconClose" style="width: 22px;position: relative; top: 5px;"/> </a>
            </div>
            <div class="BoxDescriptionLiveStream" v-if="ActiveDescription">
                <div class="max-w-xs rounded overflow-hidden shadow-lg bg-white text-left" style="min-width: 320px;">
                    <div class="px-2 py-2">
                        <div class="flex items-center">
                            <img class="w-10 h-10 rounded-full mr-4" src="https://scontent.fhan5-7.fna.fbcdn.net/v/t1.0-1/p240x240/39569798_526439594464975_2068894383662432256_n.jpg?_nc_cat=0&oh=e8ffbd9bbd8a62c9dea2d587bd0688c1&oe=5BF30DCA" alt="Avatar of Jonathan Reinink">
                            <div class="text-sm">
                                <p class="text-black leading-none" style="font-size: 18px;"><b>Nguyễn Đức Tú</b></p>
                                <p class="text-grey-dark">Trực tiếp qua kênh #ibee.vn</p>
                            </div>
                            </div>
                    </div>
                    <br/>
                    <div class="px-2 py-2">
                        <a @click="OpenDescriptionLive" class="m-1 text-black cursor-pointer" style="display: inline-block"><i class="fal fa-align-left"></i> Nhấn để nhập mô tả bài viết</a>
                        <textarea v-if="DescriptionLiveStream" style="width: 100%;
                            border: 1px solid rgb(191, 191, 191);
                            padding: 9px;
                            border-radius: 5px;
                            max-width: 100%;" rows="3" placeholder="Xin nhập mô tả bài viết ..."></textarea>
                    </div>
                    </div>
            </div>
            <div class="footer-live flex justify-content">
                 <a @click="PlayLiveStreamApp" class="cursor-pointer flex-1 text-grey-dark py-3 m-2"><img :src="IconPlayLiveStream" style="width: 54px;user-select: none;"/></a>
            </div>
        </div>
    </div>
</template>
<script>
var ffmpeg = require('ffmpeg');
var { spawn } = require('child_process');
export default {
    name: 'Index',
    data(){
        return {
            IconSwitchCamera: require('../../assets/svg/Global/switch-camera.svg'),
            IconClose: require('../../assets/svg/Global/close.svg'),
            IconPlayLiveStream: require('../../assets/svg/Global/livestreamwhite.svg'),
            DescriptionLiveStream: false,
            ActiveDescription: false

        }
    },
    mounted(){
        const _this = this;
        // Put variables in global scope to make them available to the browser console.
            const constraints = window.constraints = {
                audio: true,
                video: true
            };
            function handleSuccess(stream) {
                    const video = document.querySelector('video');
                    const videoTracks = stream.getVideoTracks();
                    console.log('Got stream with constraints:', constraints);
                    console.log(`Using video device: ${videoTracks[0].label}`);
                    window.stream = stream; // make variable available to browser console
                    video.srcObject = stream;
                    _this.ActiveDescription = true;
            }
            function handleError(error) {
                            console.log(error);
                            console.log(`getUserMedia error: ${error.name}`, error);
                        }

            navigator.mediaDevices
                .getUserMedia(constraints)
                .then(handleSuccess)
                .catch(handleError);
    },
    components: {

    },
    methods: {
        CloseLiveStreamApp(){
            this.$router.push('/')
        },
        PlayLiveStreamApp(){
            const _this = this;

            let _rtmpDestination = 'rtmp://live-api-s.facebook.com:80/rtmp/237276166990358?s_ps=1&s_vt=api-s&a=ATgm5CtfHStFiytN';
            const constraints = window.constraints = {
                audio: true,
                video: true
            };
            function handleSuccess(stream) {
                    const video = document.querySelector('video');
                    const videoTracks = stream.getVideoTracks();
                    console.log(`Using video device: ${videoTracks[0].label}`);
                    window.stream = stream;
                    video.srcObject = stream;
                    let mediaRecorder = new MediaRecorder(stream);
                    mediaRecorder.start(1);

                    mediaRecorder.ondataavailable = function(e) {
                    var ops=[
                        '-vcodec','libvpx','-i','-',
                        '-c:v', 'libx264', '-preset', 'veryfast', '-tune', 'zerolatency',
                        '-an',
                        '-bufsize', '1000',
                        '-f', 'flv', _rtmpDestination
                    ];
                    let IsData = e.data;
                    console.log(IsData);
                    ffmpeg(IsData, ops ,function(data) {
                            console.log(data);
                    });
                }
                    
            }
            function handleError(error) {
                console.log(error);
                console.log(`getUserMedia error: ${error.name}`, error);
            }

            navigator.mediaDevices
                .getUserMedia(constraints)
                .then(handleSuccess)
                .catch(handleError);            
        },
        OpenDescriptionLive(){
            this.DescriptionLiveStream = !this.DescriptionLiveStream
        }
    }
}
</script>
<style lang="scss">
.GlobalViews {
    overflow: hidden;
}

html {
    overflow: hidden !important;
}
.MainCamera {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 1;
        min-height: 100%;
        min-width: 100%;
        width: 100%;
        height: 100%;
        object-fit: cover;
}
</style>

<style lang="scss" scoped>
.navbar {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 4;
        height: 50px;
}
.footer-live {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    color: white;
    text-align: center;
    z-index: 4;
}
.BoxDescriptionLiveStream {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 3;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
}

.Views {

}
/* width */
.Views::-webkit-scrollbar {
    width: 0px;
}
/* Track */
.Views::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    border-radius: 10px;
}
 
/* Handle */
.Views::-webkit-scrollbar-thumb {
    background: #CCC; 
    border-radius: 10px;
}

/* Handle on hover */
.Views::-webkit-scrollbar-thumb:hover {
    background: #999; 
}
</style>
