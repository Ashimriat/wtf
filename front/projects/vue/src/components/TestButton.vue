<template lang="pug">
Button(
  :label="message"
  @click="handleClick"
)
</template>

<script lang="ts">
import Button from 'primevue/button';
import { Vue, Component, Prop } from 'vue-property-decorator';
import 'reflect-metadata';


@Component({
	components: { Button }
})
export default class TestButton extends Vue {
	@Prop({ default: '' }) toShow: string;
	@Prop({ default: '' }) message: string;

	handleClick(e) {
		console.log(e)
		console.log(this.toShow);
	}
};
</script>

<style lang="sass" scoped>

</style>
