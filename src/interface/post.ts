import { IComment } from './comment';

export interface iPost {
  id: number,
  description: string,
  user: string,
  commentsArray: IComment[],
}
