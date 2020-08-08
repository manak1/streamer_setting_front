<template>
  <section class="c-setting py-8">
    <div class="container px-4 mx-auto lg:w-full">
      <h2 class="text-center text-xl md:text-2xl font-bold">
        {{ name }}のキー設定
      </h2>
      <table
        style="background-color: #fff;"
        class="shadow-md mt-8 w-full md:w-4/5 lg:w-full mx-auto"
      >
        <tr
          v-for="(item, index) in keys"
          :key="index"
          class="flex hover:bg-gray-100 transition"
          style="border-bottom: thin solid rgba(0, 0, 0, 0.12);"
        >
          <th class="w-1/2 p-4 c-setting__output">
            <p class="font-bold text-base">{{ item.action }}</p>
          </th>
          <td
            class="w-1/2 text-center c-setting__input p-4 text-base"
            style="border-left: thin solid rgba(0, 0, 0, 0.12);"
          >
            {{ item.key }}
          </td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    keys: {
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

<style lang="scss" scoped>
/* .c-setting {
  &__output {
    color: #99dcff;
    background-color: #2c54b1;
    border: 4px solid #0147a8;
    border-right: 0;
    border-bottom: 2px solid #0147a8;
  }

  &__input {
    color: #94d7ff;
    background-color: rgb(0, 68, 203);
    border: 4px solid #005de4;
    border-bottom: 1px solid #0147a8;
  }
} */

/* table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}

table th,
table td {
  padding: 10px 0;
  text-align: center;
} */
</style>
