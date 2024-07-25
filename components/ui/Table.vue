<template>
  <div class="max-w-[1480px] w-full mx-auto p-6">
    <h1 class="text-5xl text-gray-800 mb-7">{{ title }}</h1>
    <div class="bg-white shadow-md rounded-3xl p-6">
      <table class="min-w-full bg-white">
        <thead class="bg-white">
          <tr>
            <th
              v-for="(head, index) in heads"
              :key="index"
              class="py-2 px-4 text-left text-xl font-normal text-[#9ea1b0]"
            >
              {{ head }}
            </th>
          </tr>
        </thead>
        <tbody class="rounded-xl bg-[#fbfbfb]">
          <tr v-for="(item, index) in items" :key="index" class="border-0">
            <td
              class="px-4 py-2.5 text-xl font-normal text-[#031138] border-0 rounded-xl uppercase"
            >
              {{ item.instrument }}
            </td>
            <td
              class="px-4 py-2.5 text-xl font-normal text-[#031138] border-0 rounded-xl"
            >
              {{ item.update }}
            </td>
            <td
              class="px-4 py-2.5 text-xl font-normal text-[#031138] border-0 rounded-xl"
            >
              {{ item.position }}
            </td>
            <td
              class="px-4 py-2.5 text-xl font-normal text-[#031138] border-0 rounded-xl"
            >
              {{ item.commission }}
            </td>
            <td
              :class="['px-4 py-2.5 text-xl border-0 rounded-xl text-red-600']"
            >
              {{ item.financialResult }}
            </td>
            <td
              class="px-4 py-2.5 text-xl font-normal text-[#031138] border-0 rounded-xl"
            >
              {{ item.drawdown }}
            </td>
            <td
              class="px-4 py-2.5 text-xl font-normal text-[#031138] border-0 rounded-xl"
            >
              {{ item.leverage }}
            </td>
          </tr>
        </tbody>
      </table>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
type TItem = {
  instrument: string;
  update: string;
  position: string;
  commission: string;
  financialResult: string;
  drawdown: string;
  leverage: string;
};
type TProps = {
  title?: string;
  heads: string[];
  items: TItem[];
};

defineProps<TProps>();
</script>
