<template>
  <section>
    <c-hero />
    <div>
      <div v-if="streamer" class="mx-auto">
        <c-profile :streamer="streamer" />
        <c-gear-list :name="streamer.name" :gear-list="gearList" />
        <c-setting
          :name="streamer.name"
          :sensitivity="streamer.sensitivity"
          :keys="streamer.keys"
        />
        <div>
          {{ streamer }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import firebase from 'firebase'
export default {
  async asyncData({ app, params }) {
    let streamer = {}
    const snapShot = await firebase
      .firestore()
      .collection('streamer')
      .where('name', '==', params.name)
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
}
</script>
