<script setup lang="ts">
import Lottie from "./components/Lottie"
import bloomData from "@/assets/bloom.json";
import type { AnimationItem } from "lottie-web";
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ref } from "vue";

const scrollGsapLottieBox = ref()

gsap.registerPlugin(ScrollTrigger);

function bloomAnimation (animation: AnimationItem) {
  ScrollTrigger.create({
    trigger: scrollGsapLottieBox.value,
    start: `top`,
    end: `bottom`,
    pin: true,
    // markers:true,
    onUpdate: (parameter: ScrollTrigger) => {
      animation.goToAndStop(animation.totalFrames * parameter.progress, true);
    }
  })
}
</script>

<template>
  <div class="scroll-gsap-lottie-box" :ref="scrollGsapLottieBox"> 
    <Lottie :animationData="bloomData" :callback="bloomAnimation"/>
  </div>
</template>

<style scoped>
.scroll-gsap-lottie-box {
    min-height: 300vh;
    background-color: #0a0a0a;
}
</style>
