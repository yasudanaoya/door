<template lang="pug">
  div
    v-btn(@click='login') Login
    v-btn(@click='logout') Logout
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import firebase from '~/plugins/firebase'

export default defineComponent({
  setup() {
    const login = () => {
      firebase.auth().signInWithRedirect(new firebase.auth.GithubAuthProvider())
    }

    const logout = () => {
      firebase.auth().signOut()
    }

    return {
      login,
      logout,
    }
  },
})
</script>
