<template lang="pug">
  div
    v-btn(@click='login') Login
    v-btn(@click='logout') Logout
    v-btn(@click='geGitHub') get
    
    p {{ `login user: ${state.user}` }}
    p {{ JSON.stringify(state.json) }}
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'
import firebase from '~/plugins/firebase'
import {
  retrieveContributionData,
  getUsernameById,
} from '~/assets/features/github'

export default defineComponent({
  setup() {
    const state = reactive({
      json: {},
      user: '',
    })

    const login = () => {
      firebase
        .auth()
        .signInWithPopup(new firebase.auth.GithubAuthProvider())
        .then(() => {
          getUser()
        })
    }

    const getUser = () => {
      const currentUser = firebase.auth().currentUser
      if (
        currentUser &&
        currentUser.providerData &&
        currentUser.providerData.length
      ) {
        const uid = currentUser.providerData[0]?.uid
        if (uid) {
          getUsernameById(uid).then((res) => {
            state.user = res.login
          })
        }
      }
    }

    const logout = () => {
      firebase.auth().signOut()
    }

    const geGitHub = async () => {
      const json = await retrieveContributionData(state.user)
      const lastIndex =
        json.data.user.contributionsCollection.contributionCalendar.weeks
          .length - 1
      const lastWeek =
        json.data.user.contributionsCollection.contributionCalendar.weeks[
          lastIndex
        ].contributionDays
      const yesterday = lastWeek[lastWeek.length - 2]
      state.json = yesterday
    }

    return {
      state,
      login,
      logout,
      geGitHub,
    }
  },
})
</script>
