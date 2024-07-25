<template>
  <div class="h-full bg-[#fbfbfb]">
    <div class="pt-60">
      <UiTable title="Акции" :heads="tableHeads" :items="tableItems">
        <template #default>
          <div
            class="rounded-xl shadow-[0_0_0_2px_#f4f4f4] p-4 mt-6 bg-[#fbfbfb]"
          >
            <div class="flex justify-center items-center gap-x-4">
              <div class="space-x-2">
                <span class="text-[#9ea1b0] text-xl">Комиссия:</span>
                <span class="text-[#031138] text-xl">334,43 ₽</span>
              </div>
              <span>—</span>
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
    instrument: "Apple",
    update: "10:00",
    position: "Buy",
    commission: "0.1",
    financialResult: 100,
    drawdown: "10%",
    leverage: "1:100",
  },
  {
    instrument: "Google",
    update: "11:00",
    position: "Sell",
    commission: "0.2",
    financialResult: -50,
    drawdown: "20%",
    leverage: "1:200",
  },
  {
    instrument: "Microsoft",
    update: "12:00",
    position: "Buy",
    commission: "0.3",
    financialResult: 150,
    drawdown: "30%",
    leverage: "1:300",
  },
];
</script>
