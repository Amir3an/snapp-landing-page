<template>
  <div
    class="flex font-yekan items-center justify-evenly w-[100%] h-[524px] bg-green-600"
  >
    <div class="flex items-center flex-col justify-center w-[50%] mt-16">
      <div class="w-[600px]">
        <p class="text-right font-bold text-white text-3xl">
          تجربه‌ی زندگی راحت‌تر، سریع‌تر و به‌صرفه‌تر<br />
          با سوپراپلیکیشن اسنپ!
        </p>
        <p class="text-right mt-10 text-white text-xl">
          از درخواست خودرو گرفته تا سفارش غذا، خرید سوپرمارکتی، خرید بلیط
          سفر،<br />
          رزرو هتل و ... را میتوانید با اسنپ انجام دهید.
        </p>

        <div class="flex w-[90%] mt-12">
          <input
            type="text"
            class="w-[50%] h-12 text-base bg-fixed bg-green-600 border-b-1 border-white cursor-text outline-none text-white"
            placeholder="9876×××××09"
          />
          <button
            class="w-[30%] text-xl h-11 rounded-lg font-semibold text-green-400 bg-white mr-4"
          >
            ارسال لینک
          </button>
        </div>
      </div>

      <button
        class="w-[260px] py-3 mt-10 border-1 border-white font-bold text-white rounded-md"
      >
        ورود به وب اپلیکیشن اسنپ
      </button>
    </div>

    <img
      class="w-[50%] h-[100%] bg-cover object-cover bg-no-repeat bg-[url('@/assets/img/phoneMan2.jpg')]"
    />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  font-family: Vazir;
}

input::placeholder {
  color: #fff;
  opacity: 0.8;
}
</style>
