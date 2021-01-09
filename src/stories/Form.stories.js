import OptionForm from "./Form.svelte";

export default {
  title: "Form",
};

export const login = () => ({
  Component: OptionForm,
  props: {
    login:true,
    text: "Default Option",
  },
});
// export const Menubar = () =>({
//   Component: OptionHeader,
//   props:{
//     Menubar:true,
//     text:"Dropdown",
//   }
// });