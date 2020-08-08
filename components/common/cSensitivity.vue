<template>
  <section class="c-setting py-8">
    <div class="container px-4 mx-auto lg:w-full">
      <h2 class="text-center text-xl md:text-2xl font-bold">
        {{ name }}の感度設定一覧
      </h2>
      <table
        style="background-color: #fff;"
        class="shadow-md mt-8 w-full md:w-4/5 lg:w-full mx-auto"
      >
        <tr
          v-for="(item, index) in sensitivity"
          :key="index"
          class="flex hover:bg-gray-100 transition"
          style="border-bottom: thin solid rgba(0, 0, 0, 0.12);"
        >
          <th class="w-1/2 p-4 c-setting__output">
            <p class="font-bold text-base">{{ item.setting }}</p>
          </th>
          <td
            class="w-1/2 text-center c-setting__input p-4 text-base"
            style="border-left: thin solid rgba(0, 0, 0, 0.12);"
          >
            {{ item.percent }}%
          </td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    sensitivity: {
      type: Object,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
}
</script>
