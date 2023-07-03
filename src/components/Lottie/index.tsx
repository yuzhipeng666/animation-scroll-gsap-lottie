import { defineComponent, ref,onMounted } from 'vue'
import styles from './index.module.css'
import lottie from "lottie-web";

const Lottie = defineComponent({
  props: {
    animationData: Object as () => unknown,
    callback: Function,
    width: {
      type: String,
      default: '200'
    },
    height: {
      type: String,
      default: '200'
    },
  },
  setup(props) {
    const lottieRef = ref() 
    const propsStyle = {
      width:  `${props.width}px`,
      height: `${props.height}px`,
      top: `calc(50% - ${Number(props.height) / 2}px)`
    }
  
    onMounted(() => {
      if (!props.animationData) return
      
      const bloomDataAnimation =  lottie.loadAnimation({
        container: lottieRef.value as Element,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: props.animationData,
      })
  
      bloomDataAnimation.addEventListener('DOMLoaded', () => {
        if (typeof props.callback === 'function') {
          props.callback(bloomDataAnimation); // 处理动画内交互逻辑
        }
      });
    });
    return () => (
      <div class={styles.scroll_gsap_lottie} ref={lottieRef} style={propsStyle}></div>
    )
  }
})

export default Lottie
