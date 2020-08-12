<template>
  <div>
    <c-hero title="Fortnite 配信者" />
    <c-search :hit-number="streamerList.length" />
    <c-search-result prefix="fortnite" :streamer-list="streamerList" />
    <c-streamers
      v-if="streamerMock"
      prefix="fortnite"
      :streamer-list="streamerMock"
    />
  </div>
</template>

<script>
import firebase from 'firebase'
import cStreamers from '@/pages/fortnite/-cStreamers'
import cSearch from '@/pages/fortnite/-cSearch'
import { streamerMock } from '@/mock/streamers.json'
const LIMIT = 8

export default {
  components: {
    cStreamers,
    cSearch,
  },
  async asyncData({ app }) {
    const snapShot = await firebase
      .firestore()
      .collection('streamer')
      .limit(LIMIT)
      .get()
    const streamerList = []
    snapShot.forEach((doc) => {
      streamerList.push({ ...doc.data(), id: doc.id })
    })

    return { streamerList }
  },
  data() {
    return {
      streamerList: [],
      limit: 8,
      streamerMock,
    }
  },

  methods: {
    async fetchGear() {
      const id = 'fSiFypVhCT7JapK45N1N'
      const snapShot = await firebase
        .firestore()
        .collection('gear')
        .where('users', 'array-contains', id)
        .get()
      const gearList = []
      snapShot.forEach((doc) => {
        gearList.push(doc.data())
      })
    },
  },
}
</script>
