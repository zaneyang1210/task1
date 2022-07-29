import { iPost } from '@/interface/post';
import { IComment } from '@/interface/comment';
import { ref } from 'vue';

const staticDataComment: IComment[] = [
  {
    description: 'This is my first comment',
    id: 0,
    reference: 0,
  },
];

const staticDataPost:iPost[] = [
  {
    description: 'This is my first twoot',
    id: 0,
    user: 'zaneyng1122',
    commentsArray: staticDataComment,
  },
];

export function useStorePost() {
  const posts = ref<iPost[]>(staticDataPost);
  return {
    posts,
  };
}

export function useStoreComment() {
  const comments = ref<IComment[]>(staticDataComment);
  return {
    comments,
  };
}
