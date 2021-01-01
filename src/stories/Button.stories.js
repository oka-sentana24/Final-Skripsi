import Button from './Button.svelte';

export default {
  title: "Button",
};

export const Default = () => ({
  Component: Button,
  props: {
    text: "Default Button",
  },
});