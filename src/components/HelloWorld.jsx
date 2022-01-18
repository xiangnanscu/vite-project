import { ref, onMounted } from "vue";

const count = ref(0);

export default {
  setup(props) {
    console.log('1', props)
    onMounted(() => console.log("hahaaaaa"));
  },
  render: (props, ctx) => {
    console.log('2', props);
    return (
      <div>
        <button onClick={() => count.value++}> click!x </button>hello {props.msg}
        {count.value}
      </div>
    );
  },
};
