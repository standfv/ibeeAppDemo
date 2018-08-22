<template>
    <div>
        <div class="navbar flex bg-black">
            <a href="" class="flex-1 text-grey-dark"><img :src="IconLogo" style="width: 212px; position: relative; top: 3px;"/></a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'NavbarTop',
    data(){
        return {
            IconLogo: require('../../../assets/images/logo.png'),
        }
    }
}
</script>
