<template>
<div>
<small class="post-label">Post:</small>
  <button class="delete-button" @click="deletePost(post.id)">x</button>
  <div class="post-box">
    " {{ post.description }} "<br>
    <small>@{{ post.user }}</small>
  </div><br>
  <button @click="showComment = !showComment ">display comments</button>
  <div v-if="showComment"></div>
  <div v-else>
    <small class="comment-label">Comments:</small>
    <div class="scrollable">
      <div v-for="comment in comments" class="comment-box"
      v-bind:key="comment.id" v-show="post.id === comment.reference">
        <small>" {{ comment.description }} "</small>
      </div>
    </div>
    <label for="comment">
      <form>
      <br><textarea row="4" v-model="newDescription"
        @click.prevent placeholder="Enter comment here..."></textarea>
      </form>
      <button @click="triggerComment(post.id)">Submit</button>
    </label>
  </div>
  <br>
  <button @click="showEdit = !showEdit ">edit</button>
  <div v-if="showEdit"></div>
  <div v-else>
    <label for="edit">
       <br><textarea placeholder="edit here..." v-model="newDescription"></textarea><br>
       <button @click="editPost(post.id)">submit</button>
     </label>
  </div>

</div>
</template>

<script lang="ts">

import { iPost } from '@/interface/post';
import router from '@/router';
import rn from '@/enums/route-names';
import UsePost from '@/composables/use-post';
import { defineComponent, PropType, ref } from 'vue';

export default defineComponent({
  name: 'PostDisplay',

  props: {
    post: {
      type: Object as PropType<iPost>,
      required: true,
    },
  },
  setup() {
    const showEdit = ref(true);
    const showComment = ref(true);
    const { comments } = UsePost();
    const { posts } = UsePost();
    const {
      newDescription,
      remove,
      edit,
      addComment,
    } = UsePost();

    function deletePost(id:number) {
      const result = remove(id);
      if (result) {
        console.log('Value deleted...');
      } else {
        console.log('Non functional...');
      }
      router.push({ name: rn.NewsFeed });
    }

    function editPost(id:number) {
      const result = edit(id);
      if (result) {
        console.log('Value edited');
      } else {
        console.log('Non functional');
      }
    }

    function triggerComment(id:number) {
      const result = addComment(id);
      if (result) {
        console.log('Value Submitted');
      } else {
        console.log('Nada');
      }
    }
    return {
      triggerComment,
      deletePost,
      editPost,
      newDescription,
      showEdit,
      showComment,
      comments,
      posts,
    };
  },
});
</script>

<style>
.post-box {
  padding: 30px;
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 255, 244);
  border-radius: 10px;
  margin-top: 5px;
}

.comment-box {
  padding: 30px;
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 255, 244);
  border-radius: 10px;
  margin: auto;
  margin-top: 5px;
  width: 50%;
}

.delete-button {
  position: relative;
  left: 44%;
  bottom: 20px;
}

.post-label {
  position: relative;
  right: 40%;
  font-weight: bold;
}

.comment-label {
  position: relative;
  right: 25%;
  font-weight: bold;
}

.scrollable {
  overflow: auto;
  max-height: 200px;
}
</style>
