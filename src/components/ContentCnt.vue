<template>
  <div
    class="flex font-yekan items-center justify-evenly h-[524px] bg-green-600"
  >
    <div class="w-[50%] pr-72 mt-10">
      <p class="text-right font-bold text-white text-4xl">
        تجربه‌ی زندگی راحت‌تر، سریع‌تر و به‌صرفه‌تر<br />
        با سوپراپلیکیشن اسنپ!
      </p>
      <p class="text-right mt-10 text-white text-2xl">
        از درخواست خودرو گرفته تا سفارش غذا، خرید سوپرمارکتی، خرید بلیط سفر،<br />
        رزرو هتل و ... را میتوانید با اسنپ انجام دهید.
      </p>

      <div class="flex w-[90%] mt-12">
        <input
          type="text"
          class="w-[50%] h-12 text-xl bg-fixed bg-green-600 border-b-1 border-white cursor-text"
          placeholder="09×××××6789"
        />
        <button
          class="w-[30%] text-xl h-11 rounded-lg font-semibold text-green-400 bg-white mr-4"
        >
          ارسال لینک
        </button>
      </div>
    </div>

    <img
      class="w-[50%] h-[100%] bg-cover object-cover bg-no-repeat bg-[url('@/assets/img/phoneMan2.jpg')]"
    />
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
