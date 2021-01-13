import OptionButton from './Button.svelte';

export default {
  title: "Button",
};

export const Default = () => ({
  Component: OptionButton,
  props: {
    text: "Default Button",
  },
});

export const Primary = () => ({
  Component: OptionButton,
  props: {
    Primary:true,
    text: "Primary",
  },
});

export const Secondary = () => ({
  Component: OptionButton,
  props: {
    Secondary:true,
    text: "Secondary",
  },
});

export const Success = () => ({
  Component: OptionButton,
  props: {
    Success:true,
    text: "Success",
  },
});