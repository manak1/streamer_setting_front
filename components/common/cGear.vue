<template>
  <div
    class="c-card w-full rounded-lg bg-white relative p-4 text-center shadow-md hover:shadow-lg"
    :class="rarityColor"
  >
    <a :href="gear.url">
      <h3 class="mt-2 font-bold text-xl">モニター</h3>
      <img :src="gear.image" class="mx-auto w-32 md:w-40" alt="" />
      <p class="mt-2">{{ gear.name }} / {{ gear.price }}円</p>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    gear: {
      type: Object,
      required: true,
    },
  },
  computed: {
    rarityColor() {
      return {
        common: this.gear.price <= 200,
        rare: this.gear.price <= 800 && this.gear.price >= 500,
        epic: this.gear.price <= 2000 && this.gear.price >= 800,
        legend: this.gear.price >= 2200,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.common {
  /* border: radial-gradient(#69bb1e, #175117); */
  border: 1px solid #69bb1e;
}

.rare {
  /* border: radial-gradient(#2cc1ff, #143977); */
  border: 1px solid #2cc1ff;
}

.epic {
  /* border: radial-gradient(#c359ff, #4b2483); */
  border: 1px solid #c359ff;
}

.legend {
  /* border: radial-gradient(#ea8d23, #78371d); */
  border: 1px solid #ea8d23;
}

.c-gear {
  &__price {
    background-color: #010420;
  }
}

.c-card {
  transition: ease-in 0.2s;
  top: 0;
  opacity: 1;
  &:hover {
    top: -10px;
    transition: ease-in-out 0.2s;
    opacity: 0.8;
  }
}
</style>
