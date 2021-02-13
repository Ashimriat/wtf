<template lang="pug">
  div.Popup__main
    | Title
    div.Popup__color
    div.Popup__buttonsContainer
      button.Popup__button(@click="toggleMap")
    canvas#map(v-if="showMap")
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  import chromeApi from "../chromeHolder";

  @Component
  export default class PopupApp extends Vue {
      showMap: boolean;

      toggleMap(): void {
        this.showMap = !this.showMap;
      }
  }
</script>

<style scoped lang="sass">
  .Popup
    &__main
      width: 60px
      height: 60px
    &__color
      width: 20px
      height: 20px
    &__buttonsContainer
      width: 40px
      display: flex
      flex-direction: column
</style>
