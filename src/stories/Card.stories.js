import OptionCard from "./Card.svelte";

export default {
  title: "Card",
};

export const Card = () => ({
  Component: OptionCard,
  props: {
    Card:true,
    text: "Default Option",
  },
});

export const CardBody = () => ({
  Component: OptionCard,
  props: {
    CardBody: true,
    text: "Correct Option",
  },
});