<template lang="pug">
Button(
  :label="message"
  @click="handleClick"
)
</template>

<script lang="ts">
import 'reflect-metadata';
import Button from 'primevue/button';
import { Vue, Options, Prop } from 'vue-property-decorator';


@Options({
	components: { Button },
})
export default class TestButton extends Vue {
	@Prop({ default: '' }) toShow?: string;
	@Prop({ default: '' }) message?: string;
}
</script>

<style lang="sass" scoped>

</style>
