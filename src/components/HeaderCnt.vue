<template>
  <nav class="flex font-yekan w-[100%] fixed h-24 bg-white shadow-md">
    <ul class="flex mr-[10%] font-iran-sans justify-center items-center">
      <a class="cursor-pointer text-gray-500 mr-7"><Snapp /></a>
      <div
        @mouseleave="hideShowList()"
        class="text-gray-500 h-[100%] relative mt-[4.50rem] mr-6"
      >
        <div class="flex items-center">
          <a
            @mouseover="showList()"
            class="cursor-pointer text-xl text-gray-500"
            >سوپراپ اسنپ</a
          >
          <!-- <span><DownArrow class="mr-3" /></span> -->
        </div>
        <ul
          ref="listVisible"
          class="text-right duration-150 opacity-0 absolute top-7 pr-4 -right-5 bg-white rounded-lg border-1 border-gray-200 py-2 w-40"
        >
          <li
            class="mt-2 cursor-pointer text-xl text-gray-500 hover:text-green-500 hover:font-bold transition-text duration-200 w-fit"
          >
            درخواست تاکسی
          </li>
          <li
            class="mt-5 cursor-pointer text-xl text-gray-500 hover:text-green-500 hover:font-bold transition-text duration-200 w-fit"
          >
            پیک موتوری
          </li>
          <li
            class="mt-5 cursor-pointer text-xl text-gray-500 hover:text-green-500 hover:font-bold transition-text duration-200 w-fit"
          >
            سفارش انلاین غذا
          </li>
          <li
            class="mt-5 cursor-pointer text-xl text-gray-500 hover:text-green-500 hover:font-bold transition-text duration-200 w-fit"
          >
            سوپر مارکت
          </li>
          <li
            class="mt-5 cursor-pointer text-xl text-gray-500 hover:text-green-500 hover:font-bold transition-text duration-200 w-fit"
          >
            رزرو بلیط هواپیما
          </li>
          <li
            class="mt-5 cursor-pointer text-xl text-gray-500 hover:text-green-500 hover:font-bold transition-text duration-200 w-fit"
          >
            رزرو بلیط قطار
          </li>
          <li
            class="mt-5 cursor-pointer text-xl text-gray-500 hover:text-green-500 hover:font-bold transition-text duration-200 w-fit"
          >
            رزرو بلیط اتوبوس
          </li>
          <li
            class="mt-5 cursor-pointer text-xl text-gray-500 hover:text-green-500 hover:font-bold transition-text duration-200 w-fit"
          >
            رزرو هتل
          </li>
          <li
            class="mt-5 cursor-pointer text-xl text-gray-500 hover:text-green-500 hover:font-bold transition-text duration-200 w-fit"
          >
            درخواست وانت بار
          </li>
          <li
            class="mt-5 cursor-pointer text-xl text-gray-500 hover:text-green-500 hover:font-bold transition-text duration-200 w-fit"
          >
            خدمات اسباب‌کشی
          </li>
          <li
            class="mt-5 cursor-pointer text-xl text-gray-500 hover:text-green-500 hover:font-bold transition-text duration-200 w-fit"
          >
            پزشک و مشاور
          </li>
          <li
            class="mt-5 cursor-pointer text-xl text-gray-500 hover:text-green-500 hover:font-bold transition-text duration-200 w-fit"
          >
            اسنپ پرو
          </li>
        </ul>
      </div>
      <a class="cursor-pointer text-xl text-gray-500 mr-10"
        >ثبت نام راننده اسنپ</a
      >
      <a class="cursor-pointer text-xl text-gray-500 mr-7">باشگاه رانندگان</a>
      <a class="cursor-pointer text-xl text-gray-500 mr-7">پنل سازمانی</a>
      <a class="cursor-pointer text-xl text-gray-500 mr-7">بلاگ</a>
      <div
        @mouseleave="hideShowList2()"
        class="text-gray-500 relative h-[100%] mt-[4.50rem] mr-6"
      >
        <div class="flex items-center">
          <a
            @mouseover="showList2()"
            class="cursor-pointer text-xl text-gray-500 mr-3"
            >درباره اسنپ
          </a>
          <span><arrowDown class="mr-3" /></span>
        </div>
        <ul
          ref="listVisible2"
          class="text-right duration-150 opacity-0 absolute top-7 -right-5 pr-4 bg-white rounded-lg border-1 border-gray-200 py-2 w-40"
        >
          <li
            class="mt-2 cursor-pointer text-xl text-gray-500 hover:text-green-500 hover:font-bold transition-text duration-200 w-fit"
          >
            فرصت های شغلی
          </li>
          <li
            class="mt-5 cursor-pointer text-xl text-gray-500 hover:text-green-500 hover:font-bold transition-text duration-200 w-fit"
          >
            درباره ما
          </li>
          <li
            class="mt-5 cursor-pointer text-xl text-gray-500 hover:text-green-500 hover:font-bold transition-text duration-200 w-fit"
          >
            تماس با ما
          </li>
        </ul>
      </div>
    </ul>
  </nav>
</template>
<script>
import Snapp from "@/assets/file , svg/snappTextLogo.vue";
import arrowDown from "@/assets/file , svg/aroow-down.vue";

export default {
  components: {
    Snapp,
    arrowDown,
  },
  data() {},
  methods: {
    showList() {
      if (this.$refs.listVisible) {
        this.$refs.listVisible.style.opacity = "1";
        this.$refs.listVisible.style.display = "inline";
      }
    },
    hideShowList() {
      if (this.$refs.listVisible) {
        this.$refs.listVisible.style.opacity = "0";
        this.$refs.listVisible.style.display = "none";
      }
    },
    showList2() {
      if (this.$refs.listVisible2) {
        this.$refs.listVisible2.style.opacity = "1";
        this.$refs.listVisible2.style.display = "inline";
      }
    },
    hideShowList2() {
      if (this.$refs.listVisible2) {
        this.$refs.listVisible2.style.opacity = "0";
        this.$refs.listVisible2.style.display = "none";
      }
    },
  },
};
</script>
<style scoped>
@font-face {
  font-family: iran-sans;
  src: url("../assets/font/irsans.ttf");
}
</style>
