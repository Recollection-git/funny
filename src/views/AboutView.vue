<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script setup>
//初次使用pinia
import { useAuthUserStore } from "@/stores/auth";
import { onMounted } from "vue";
const auth = useAuthUserStore();
auth.increment(456);
onMounted(() => {
  console.log(auth.authStore);
});
</script>
<style>
@media (min-width: 64rem) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
