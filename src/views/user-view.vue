<template>
  <div class="about">
    <h1>Zane Alen B. Yang</h1>
    <h6>Silliman University | BSCS III</h6>
  </div>
</template>
<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UserView',
});
</script>

<style>
.about {
  padding: 30px;
  border-radius: 15px;
  background-color: rgb(222, 222, 222);
  width: 50%;
  margin: auto;
  margin-top: 10px;
  cursor: pointer;
  transition: all 0.25s ease;
}

.about:hover {
    transform: scale(1.05,1.05);
}
</style>
