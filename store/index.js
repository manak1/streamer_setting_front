/* 
TODO: 後でしっかりゲームごとにストアを切り分けましょう。
*/
import firebase from 'firebase'

export const state = () => ({
  recommend: null,
})

export const mutations = {
  setRecommend(state, payload) {
    state.recommend = payload
  },
}

export const getters = {
  recommend(state) {
    return state.recommend
  },
}

export const actions = {
  async nuxtServerInit({ commit }, { $config }) {
    const recommendList = []
    const snapShot = await firebase
      .firestore()
      .collection('streamer')
      .limit(5)
      .get()
    snapShot.forEach((doc) => {
      recommendList.push({
        ...doc.data(),
        id: doc.id,
        createdAt: doc.data().createdAt.toDate(),
        editedAt: doc.data().editedAt.toDate(),
      })
    })
    commit('setRecommend', recommendList)
  },
}
