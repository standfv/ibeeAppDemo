<template>
    <div>
        <div class="footer">
            <div class="flex bg-black" style="font-size: 22px;">
                <a class="flex-1" style="cursor: pointer"><div class="text-center px-1 py-1 mt-2 mb-1" style="color: #f2c747"><i class="fal fa-home"></i><p class="text-xs" style="color: #f2c747">Trang chủ</p></div></a>
                <a class="flex-1" style="cursor: pointer"><div class="text-center px-1 py-1 mt-2 mb-1" style="color: #f2c747"><i class="fal fa-search"></i> <p class="text-xs" style="color: #f2c747">Tìm kiếm</p></div></a>
                <a @click="AfterLiveApp" class="flex-1" style="cursor: pointer"><div class="text-white text-center px-1 py-1 mt-2 mb-1"><i class="fal fa-circle" style="font-size: 32px; position: relative; top: -9px;"></i> <p class="text-xs text-white" style="line-height: 0px;position: relative; top: -2px;">Trực tiếp</p></div></a>
                <a @click="NotificationApp" class="flex-1" style="cursor: pointer"><div class="text-center px-1 py-1 mt-2 mb-1" style="color: #f2c747"><i class="fal fa-bell"></i> <p class="text-xs" style="color: #f2c747">Thông báo</p></div></a>
                <a class="flex-1" style="cursor: pointer"><div class="text-center px-1 py-1 mt-2 mb-1" style="color: #f2c747"><i class="fal fa-ellipsis-v-alt"></i><i class="fal fa-ellipsis-v-alt"></i><i class="fal fa-ellipsis-v-alt"></i> <p class="text-xs" style="color: #f2c747">Menu</p></div></a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'NavbarFooter',
    data(){
        return {

        }
    },
    methods: {
        NotificationApp(){
            this.$router.push('/pn/Notification')
        },
        AfterLiveApp(){
            this.$router.push('/pn/AfterLive')
        }
    }
}
</script>
<style lang="scss" scoped>
.footer {
   position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
   color: white;
   text-align: center;
   img {
       width: 22px;
   }
}
</style>
