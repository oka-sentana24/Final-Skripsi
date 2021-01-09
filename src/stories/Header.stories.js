import OptionHeader from "./Header.svelte";

export default {
  title: "Header",
};

export const Navbar = () => ({
  Component: OptionHeader,
  props: {
    Navbar:true,
    text: "Default Option",
  },
});

export const LoginHead = () => ({
  Component: OptionHeader,
  props: {
    LoginHead: true,
    text: "Correct Option",
  },
});

export const Menubar = () =>({
  Component: OptionHeader,
  props:{
    Menubar:true,
    text:"Dropdown",
  }
});