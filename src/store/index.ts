import { createStore } from "vuex";
import UsersModule from "./users.module";
import PostsModule from "./posts.module";

export default createStore({
  modules: {
    users: UsersModule,
    posts: PostsModule,
  },
});
