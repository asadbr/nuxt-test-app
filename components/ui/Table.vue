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
              class="pb-6 px-4 text-left text-xl font-normal text-[#9ea1b0]"
            >
              {{ head }}
            </th>
          </tr>
        </thead>
        <tbody class="rounded-xl bg-[#fbfbfb]">
          <tr v-for="(item, index) in items" :key="index">
            <td
              :class="[
                { 'pt-5 rounded-tl-xl border-t-2': index === 0 },
                { 'pb-5 rounded-bl-xl border-b-2': index === items.length - 1 },
              ]"
              class="px-5 py-2.5 text-xl font-normal text-[#031138] uppercase border-l-2 border-[#f4f4f4]"
            >
              {{ item.instrument }}
            </td>
            <td
              :class="[
                { 'pt-5 border-t-2': index === 0 },
                { 'pb-5 border-b-2': index === items.length - 1 },
              ]"
              class="px- py-2.5 text-xl font-normal text-[#031138] border-[#f4f4f4]"
            >
              {{ item.update }}
            </td>
            <td
              :class="[
                { 'pt-5 border-t-2': index === 0 },
                { 'pb-5 border-b-2': index === items.length - 1 },
              ]"
              class="px-4 py-2.5 text-xl font-normal text-[#031138] border-[#f4f4f4]"
            >
              {{ item.position }}
            </td>
            <td
              :class="[
                { 'pt-5 border-t-2': index === 0 },
                { 'pb-5 border-b-2': index === items.length - 1 },
              ]"
              class="px-4 py-2.5 text-xl font-normal text-[#031138] border-[#f4f4f4]"
            >
              {{ item.commission }}
            </td>
            <td
              :class="[
                { 'pt-5 border-t-2': index === 0 },
                { 'pb-5 border-b-2': index === items.length - 1 },
                { 'text-green-600': index % 2 === 0 },
                { 'text-red-600': index % 2 !== 0 },
              ]"
              class="px-4 py-2.5 text-xl border-[#f4f4f4]"
            >
              {{ item.financialResult }}
            </td>
            <td
              :class="[
                { 'pt-5 border-t-2': index === 0 },
                { 'pb-5 border-b-2': index === items.length - 1 },
              ]"
              class="px-4 py-2.5 text-xl font-normal text-[#031138] border-[#f4f4f4]"
            >
              {{ item.drawdown }}
            </td>
            <td
              :class="[
                { 'pt-5 rounded-tr-xl border-t-2': index === 0 },
                { 'pb-5 rounded-br-xl border-b-2': index === items.length - 1 },
              ]"
              class="px-5 py-2.5 text-xl font-normal text-[#031138] border-r-2 border-[#f4f4f4]"
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
