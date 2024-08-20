<template>
  <nav class="flex w-[100%] h-24 bg-white shadow-md">
    <ul class="flex mr-[10%] justify-center items-center">
      <a class="cursor-pointer mr-7"><Snapp /></a>
      <div class="cursor-pointer mr-7 relative">
        <span class="cursor-pointer mr-7">سوپراپ اسنپ</span>
        <ul class="w-[100%] mt-64">
          <li>سوپراپ اسنپ</li>
          <li>درخاست تاکسی</li>
          <li>پیک موتوری</li>
          <li>سفارش انلاین غذا</li>
          <li>سوپر مارکت</li>
          <li>رزرو بلیط هواپیما</li>
          <li>رزرو بلیط قطار</li>
          <li>رزرو بلیط اتوبوس</li>
          <li>رزرو هتل</li>
          <li>درخواست وانت بار</li>
          <li>خدمات اسباب‌کشی</li>
          <li>پزشک و مشاور</li>
          <li>اسنپ پرو</li>
        </ul>
      </div>
      <a class="cursor-pointer mr-7">ثبت نام راننده اسنپ</a>
      <a class="cursor-pointer mr-7">باشگاه رانندگان</a>
      <a class="cursor-pointer mr-7">پنل سازمانی</a>
      <a class="cursor-pointer mr-7">بلاگ</a>
      <a class="cursor-pointer mr-7">درباره اسنپ</a>
    </ul>
  </nav>
</template>
<script>
import Snapp from "@/assets/snappTextLogo.vue";

export default {
  components: {
    Snapp,
  },
};
</script>
<style scoped></style>
