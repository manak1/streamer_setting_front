<template>
  <section class="c-setting py-8">
    <div class="container px-4 mx-auto w-full">
      <h2 class="text-center text-2xl font-bold">{{ name }}の設定一覧</h2>
      <table style="background-color: #fff;" class="shadow-lg mt-8 w-full">
        <tr
          v-for="(item, index) in sortedKeys"
          :key="index"
          class="flex hover:bg-blue-300 transition"
          style="border-bottom: thin solid rgba(0, 0, 0, 0.12);"
        >
          <th class="w-1/2 p-4 c-setting__output">
            <p class="font-bold text-base">{{ sortedOutputs[index] }}</p>
          </th>
          <td
            class="w-1/2 text-center c-setting__input p-4 text-base"
            style="border-left: thin solid rgba(0, 0, 0, 0.12);"
          >
            {{ item }}
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
    sensitivity: {
      type: Object,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      sortedKeys: [],
      sortedOutputs: [
        'トラップ',
        'マップ',
        'リロード',
        '屋根',
        'インベントリー',
        '床',
        '編集',
        '建築修理',
        '階段',
        '壁',
        '編集リセット',
        'しゃがみ',
      ],
    }
  },
  mounted() {
    this.sortedKeys = Object.values(this.keys)
    this.sortedKeys.sort()
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
