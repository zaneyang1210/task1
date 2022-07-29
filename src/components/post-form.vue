<template>
  <div class="post">
    <label for="post">
      <form>
        <textarea class="post-text" rows="4"
        v-model="newDescription" @click.prevent
        placeholder="Enter post here..."></textarea><br>
        <textarea rows="2" v-model="newUser"
         @click.prevent placeholder="Enter Username here...."></textarea>
      </form>
      <button @click="triggerPost()">Submit</button>
    </label>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import UsePost from '@/composables/use-post';

export default defineComponent({
  name: 'PostFormComponent',
  setup() {
    const {
      newDescription,
      newUser,
      add,
      addComment,
    } = UsePost();

    function triggerPost() {
      const result = add();
      if (result) {
        console.log('Value submitted  ');
      } else {
        console.log('Nada');
      }
    }

    return {
      newDescription,
      newUser,
      add,
      triggerPost,
      addComment,
    };
  },
});
</script>
<style>
.post {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.post-text {
  width: 60%;
}
</style>
