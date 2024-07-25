<template>
  <div class="h-full bg-[#fbfbfb]">
    <div class="pt-60">
      <UiTable title="Акции" :heads="tableHeads" :items="tableItems">
        <template #default>
          <div
            class="rounded-xl border-2 border-[#f4f4f4] p-5 mt-4 bg-[#fbfbfb]"
          >
            <div class="flex justify-center items-center gap-x-3">
              <div class="space-x-2">
                <span class="text-[#9ea1b0] text-xl">Комиссия:</span>
                <span class="text-[#031138] text-xl">334,43 ₽</span>
              </div>
              <span>&#x2022;</span>
              <div class="space-x-2">
                <span class="text-[#9ea1b0] text-xl">Фин. результат:</span>
                <span class="text-[#031138] text-xl">76 354,82 ₽</span>
              </div>
            </div>
          </div>
        </template>
      </UiTable>
    </div>
  </div>
</template>
<script setup lang="ts">
const tableHeads = [
  "Инструмент",
  "Обновление",
  "Позиция",
  "Комиссия (₽)",
  "Фин. рез. (₽)",
  "Просадка (₽)",
  "Плечо",
];

const tableItems = [
  {
    instrument: "GAZP",
    update: "20:20:28  24-06-24",
    position: "644",
    commission: "0",
    financialResult: "426 216,4",
    drawdown: "-6 000 000",
    leverage: "10",
  },
  {
    instrument: "SBER",
    update: "20:20:28  24-06-24",
    position: "532",
    commission: "334,43",
    financialResult: "360 232,68",
    drawdown: "-6 000 000",
    leverage: "10",
  },
  {
    instrument: "TATNP",
    update: "20:20:28  24-06-24",
    position: "32915",
    commission: "0",
    financialResult: "10 371,1",
    drawdown: "-6 000 000",
    leverage: "10",
  },
];
</script>
