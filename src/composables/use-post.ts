/* eslint-disable no-alert */
import { iPost } from '@/interface/post';
import { ref } from 'vue';
import { IComment } from '@/interface/comment';
import { useStorePost, useStoreComment } from './use-store';

export default function usePost() {
  const { posts } = useStorePost();
  const { comments } = useStoreComment();
  const newDescription = ref('');
  const newUser = ref('');
  let counter = 0;

  function add(): boolean {
    let result = false;
    counter += 1;
    const item = {
      id: counter,
      description: newDescription.value,
      user: newUser.value,
      commentsArray: [],
    } as iPost;

    if (newDescription.value !== '' && newUser.value !== '') {
      posts.value.unshift(item);
      result = true;
    } else {
      // eslint-disable-next-line no-alert
      alert('Field Empty');
      console.log('empty field...');
    }

    newDescription.value = '';
    newUser.value = '';
    return result;
  }

  function findIndex(id:number):number {
    let results = -1;
    posts.value.forEach((item, index) => {
      if (item.id === id) {
        results = index;
      }
    });
    return results;
  }

  function remove(value: number): boolean {
    const index = findIndex(value);
    let result = false;
    if (index >= 0) {
      posts.value.splice(index, 1);
      comments.value.splice(index, index);
      result = true;
    }
    return result;
  }

  function edit(value: number): boolean {
    const index = findIndex(value);
    let result = false;

    if (newDescription.value !== '') {
      if (index >= 0) {
        posts.value[index].description = newDescription.value;
        result = true;
      }
    } else {
      alert('Field Empty...');
    }
    newDescription.value = '';
    return result;
  }

  function addComment(value: number): boolean {
    const len = comments.value.length;
    const index = findIndex(value);
    let result = false;
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const referTo = value;

    const item = {
      id: len === 0 ? len : len + 1,
      description: newDescription.value,
      reference: referTo,
    } as IComment;

    if (newDescription.value !== '') {
      if (index >= 0) {
        comments.value.push(item);
        result = true;
      }
    } else {
      console.log('empty field...');
      // eslint-disable-next-line no-alert
      alert('Field Empty...');
    }
    newDescription.value = '';
    return result;
    newDescription.value = '';
  }

  return {
    newUser,
    newDescription,
    posts,
    comments,
    counter,
    add,
    remove,
    findIndex,
    edit,
    addComment,
  };
}
