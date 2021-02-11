import Sidebar from "./Sidebar.svelte";

export default {
  title: "Sidebar",
};

export const Sidebar = () => ({
  Component: Sidebar,
  props: {
    Sidebar:true,
    text: "Default Option",
  },
});

// export const LoginHead = () => ({
//   Component: OptionHeader,
//   props: {
//     LoginHead: true,
//     text: "Correct Option",
//   },
// });