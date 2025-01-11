<template>
  <HeaderCnt />
  <ContentCnt />
</template>

<script>
import HeaderCnt from "@/components/HeaderCnt.vue";
import ContentCnt from "@/components/ContentCnt.vue";

export default {
  name: "App",
  components: {
    HeaderCnt,
    ContentCnt,
  },
};
</script>

<style>
@font-face {
  font-family: Vazir;
  src: url(assets/font/Vazir-FD.woff);
}
#app {
  width: 100%;
  padding: 0;
  margin: 0;
  height: 150vh;
  direction: rtl;
}
</style>
