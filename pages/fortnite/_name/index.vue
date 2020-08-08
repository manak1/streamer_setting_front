<template>
  <section>
    <c-hero />
    <div class="pb-32">
      <div v-if="streamer" class="mx-auto">
        <c-profile :profile="streamer.profile" />
        <c-gear-list :name="streamer.profile.name" :gear-list="gearList" />
        <c-sensitivity
          :sensitivity="streamer.sensitivity"
          :name="streamer.profile.name"
        />
        <c-key-setting :name="streamer.profile.name" :keys="streamer.keys" />
        <c-recommend prefix="fortnite" :streamer-list="recommend" />
      </div>
    </div>
  </section>
</template>

<script>
import firebase from 'firebase'
import { mapGetters } from 'vuex'
export default {
  async asyncData({ app, params }) {
    let streamer = {}
    const snapShot = await firebase
      .firestore()
      .collection('streamer')
      .where('profile.name', '==', params.name)
      .get()
    snapShot.forEach((doc) => {
      streamer = doc.data()
    })
    return {
      streamer,
    }
  },
  data() {
    return {
      streamer: null,
      gearList: [
        {
          name: 'Death Adder 2013',
          category: 'キーボード',
          url: 'https://hellomanaki.com',
          price: '20000',
          image:
            'https://assets.razerzone.com/eeimages/products/25919/daelite_gallery02.png',
        },
        {
          name: 'Death Adder 2013',
          url: 'https://hellomanaki.com',
          price: '2000',
          category: 'キーボード',
          image:
            'https://assets.razerzone.com/eeimages/products/25919/daelite_gallery02.png',
        },
        {
          name: 'Death Adder 2013',
          url: 'https://hellomanaki.com',
          category: 'キーボード',
          price: '500',
          image:
            'https://assets.razerzone.com/eeimages/products/25919/daelite_gallery02.png',
        },
        {
          name: 'Death Adder 2013',
          url: 'https://hellomanaki.com',
          category: 'キーボード',

          price: '700',
          image:
            'https://assets.razerzone.com/eeimages/products/25919/daelite_gallery02.png',
        },
        {
          name: 'Death Adder 2013',
          url: 'https://hellomanaki.com',
          category: 'キーボード',

          price: '500',
          image:
            'https://assets.razerzone.com/eeimages/products/25919/daelite_gallery02.png',
        },
        {
          name: 'Death Adder 2013',
          url: 'https://hellomanaki.com',
          category: 'キーボード',

          price: '500',
          image:
            'https://assets.razerzone.com/eeimages/products/25919/daelite_gallery02.png',
        },
        {
          name: 'Death Adder 2013',
          url: 'https://hellomanaki.com',
          category: 'キーボード',

          price: '500',
          image:
            'https://assets.razerzone.com/eeimages/products/25919/daelite_gallery02.png',
        },
        {
          name: 'Death Adder 2013',
          url: 'https://hellomanaki.com',
          category: 'キーボード',

          price: '500',
          image:
            'https://assets.razerzone.com/eeimages/products/25919/daelite_gallery02.png',
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['recommend']),
  },
}
</script>
