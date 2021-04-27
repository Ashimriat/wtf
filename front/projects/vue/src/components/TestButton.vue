<template lang="pug">
Button(
  :label="message"
  @click="handleClick"
)
</template>

<script lang="ts">
import Button from 'primevue/button';


export default {
  name: 'TestButton',
  components: { Button },
  props: ['message', 'toShow'],
  methods: {
    handleClick(e) {
      alert(this.toShow);
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
