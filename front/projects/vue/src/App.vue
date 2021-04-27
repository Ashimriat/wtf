<template lang="pug">
div
  Button(
    message="Say hello"
    toShow="Аллилуйя!"
  )
</template>

<script lang="ts">
  import TestButton from './components/TestButton';

  export default {
    name: 'App',
    components: { Button: TestButton },
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style lang="sass" scoped>

</style>
