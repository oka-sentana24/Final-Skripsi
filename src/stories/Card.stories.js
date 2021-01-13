import OptionCard from "./Card.svelte";

export default {
  title: "Card",
};

export const Default = () => ({
  Component: OptionCard,
  props: {
    text: "Default Card",
  },
});

export const CardSide = () => ({
  Component: OptionCard,
  props: {
    CardSide:true,
    text: "Default Option",
  },
});