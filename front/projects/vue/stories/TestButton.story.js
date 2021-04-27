import Button from '../src/components/Button';


const Template = (args, { argTypes }) => ({
    components: { Button },
    props: Object.keys(argTypes),
    template: '<Button v-bind="$props" v-on="$props" />',
});
  


export const Primary = Template.bind({});
    components: { Button },
    template: `<Button />`
});
Primary.args = {
    message: 'Say hello',
    toShow: 'PIPKA!',
};

export default {
    component: Button,
    title: 'Components/Button',
};
