<template lang="pug">
div
  Button(
    message="Say hello"
    toShow="Аллилуйя!"
  )
</template>

<script lang="ts">
import 'reflect-metadata';
import { Vue, Options } from 'vue-property-decorator';
import TestButton from './components/TestButton.vue';


@Options({
	components: { Button: TestButton },
})
export default class App extends Vue {}
</script>

<style lang="sass" scoped>

</style>
