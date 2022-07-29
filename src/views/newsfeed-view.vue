<template>
  <div class="post-forms">
    <PostFormComponent/><br>
  </div>
  <div v-for="post in posts" v-bind:key="post.id" class="forms">
    <PostsDisplay :post="post"/><br>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import PostFormComponent from '@/components/post-form.vue';
import PostsDisplay from '@/components/posts-display.vue';
import usePost from '@/composables/use-post';

export default defineComponent({
  name: 'NewsfeedView',
  components: {
    PostFormComponent, PostsDisplay,
  },
  setup() {
    const { posts } = usePost();
    const { comments } = usePost();
    const show = ref(true);
    const reference = 0;
    return {
      posts,
      show,
      reference,
      comments,
    };
  },
});
</script>

<style>
.forms {
  padding: 30px;
  border-radius: 15px;
  background-color: rgb(222, 222, 222);
  width: 50%;
  margin: auto;
  margin-top: 10px;
  cursor: pointer;
  transition: all 0.25s ease;
}

.forms:hover {
    transform: scale(1.05,1.05);
}

.post-forms {
  padding: 30px;
  border-radius: 15px;
  background-color: rgb(231, 229, 229);
  width: 50%;
  margin: auto;
  margin-top: 10px;
}
</style>
