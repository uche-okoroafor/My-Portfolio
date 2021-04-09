<template>
  <div>
    <h3 @click="showUserProfile(userData.userName, userData.userId)">
      Welcome {{userData.userName }}
    </h3>

    <div class="container">
      <div class="container1">
        <ul class="list-group">
          <li class="list-group-item bg-info" @click="showMessages">
            Messages
          </li>
          <li class="list-group-item bg-info" @click="showFriends">
            Friends
            <span>{{ userData.friends.length }}</span>
          </li>
          <li class="list-group-item bg-info" @click="showTimeline">
            My Timeline
          </li>
          <li class="list-group-item bg-info" @click="showFollowing">
            Following <span>{{ userData.following.length }}</span>
          </li>
          <li class="list-group-item bg-info" @click="showFollowers">
            Followers
            <span>{{ userData.followers.length }}</span>
          </li>
        </ul>
      </div>
      <div class="container2">
        <form @submit.prevent="handlePublishPost()" class="m-5">
          <textarea
            name="posttextarea"
            v-model="postTextArea"
            cols="30"
            rows="3"
            placeholder="make a post"
          ></textarea>

          <br />

          <button type="submit" class="btn btn-success">Post</button>
        </form>

        <div v-for="post in newsFeed" :key="post.postId">
          <router-link
            :to="{ name: 'userProfile', params: { userName: post.userName } }"
          >
            <h5
              class="bg-success"
              @click="showUserProfile(post.userName, post.userId)"
            >
              {{ post.userName }}
            </h5>
          </router-link>
          <div class="posted m-5 rounded">
            {{ post.posts }}
          </div>
          <span
            @click="
              handleLikes(
                'postLikes',
                'incrementPostLikes',
                post.postId,
                userData.userId
              )
            "
            class="m-2 p-5 text-success"
            ><i class="fa fa-thumbs-up"></i>{{ post.likes.length }}</span
          >
          <span
            @click="
              handleLikes(
                'postLikes',
                'decrementPostLikes',
                post.postId,
                userData.userId
              )
            "
            class="m-2 p-5"
            ><i class="fa fa-thumbs-down text-danger"></i
            >{{ post.unLikes.length }}</span
          >
          <div v-for="comment in post.comments" :key="comment.userName">
            <router-link
              :to="{
                name: 'userProfile',
                params: { userName: comment.userName },
              }"
            >
              <span
                @click="showUserProfile(comment.userName, comment.userId)"
                >{{ comment.userName }}</span
              >
            </router-link>
            <p>{{ comment.comment }}</p>

            <span
              @click="
                handleLikes(
                  'commentLikes',
                  'incrementCommentLikes',
                  post.postId,
                  userData.userId,
                  comment.commentId
                )
              "
              class="m-2 p-5 text-success"
              ><i class="fa fa-thumbs-up"></i>{{ comment.likes.length }}</span
            >
            <span
              @click="
                handleLikes(
                  'commentLikes',
                  'decrementCommentLikes',
                  post.postId,
                  userData.userId,
                  comment.commentId
                )
              "
              class="m-2 p-5"
              ><i class="fa fa-thumbs-down text-danger"></i
              >{{ comment.unLikes.length }}</span
            >
          </div>

          <form
            @submit.prevent="
              handlePosterComment(post.posterComment, post.postId)
            "
            class="m-5"
          >
            <input
              type="text"
              placeholder="Post a comment"
              v-model="post.posterComment"
            />

            <button type="submit">Comment</button>
          </form>
        </div>
</div>  <div class="container3"></div>

      </div>
  </div>

  <h1>{{ comments }}</h1>
</template>


<script>
import LogInPage from "./LogInPage";
import { uuid } from "vue-uuid";

export default {
  name: "Home",
  components: { LogInPage },
  props: ["comments"],
  data() {
    return {
      userData: {
        userName: "Guest",
        userId: "419",
        emailAddress: "419",
        firstName: "",
        lastName: "",
        address: "",
        emailAddress: "",
        postCode: "",
        country: "",
        city: "",
        aboutMe: "",
        password: "",
        messages: [],
        posts: [],
        followers: [],
        following: [],
        friends: [],
        likes: [],
        unLikes: [],
        posterComment: "",
        comments: {
          likes: [],
          unLikes: [],
        },
      },

      newsFeed: {},
      postTextArea: "",
      displayFriends: false,
      displayFollowers: false,
      displayFollowing: false,

      userProfile: {},
    };
  },

  mounted() {
    this.loadData();
  },
  beforeUnmount() {
    this.loadData();
  },

  methods: {
    loadData() {
      this.newsFeed = this.$store.state.newsFeed;
this.userData= this.$store.state.userData
    },

    handleUserData(userData) {
      this.userData = userData;
      this.$emit("sendUserData", this.userData);
    },

    showMessages() {
      if (this.userData.userName !== "Guest") {
   this.$router.push({
          name: "Messages",
          params: { userName: this.userData.userName },
        });
      }
    },
    showFriends() {
      if (this.userData.userName !== "Guest") {
        this.displayFriends = !this.displayFriends;
 this.$router.push({
          name: "Friends",
          params: { userName: this.userData.userName },
        });
      }
    },
    showTimeline() {
      if (this.userData.userName !== "Guest") {
      }
    },
    showFollowers() {
      if (this.userData.userName !== "Guest") {
        this.displayFollowers = !this.displayFollowers;
      }
    },
    showFollowing() {
      if (this.userData.userName !== "Guest") {
        this.displayFollowing = !this.displayFollowing;
      }
    },

    showUserProfile(userName, userId) {
      this.userProfile = this.$store.state.users[userName];
      if (this.userData.userName !== "Guest") {
        this.$router.push({
          name: "userProfile",
          params: { userName: this.userData.userName },
        });
      }
    },

    handlePublishPost() {
      let postId = uuid.v1();

      if (this.postTextArea.length) {
        this.$store.dispatch("handlePublishPost", {
          [postId]: {
            userName: this.userData.userName,
            userId: this.userData.userId,
            postId,
            posts: this.postTextArea,
            likes: [],
            unLikes: [],
            posterComment: "",
            comments: [],
          },
        });
        this.postTextArea = "";
        this.loadData();
      }
    },

    handleLikes(condition, params, postId, userId, commentId) {
      this.$store.dispatch("handleLikes", {
        condition,
        params,
        postId,
        userId,
        commentId,
      });
    },

    handlePosterComment(comment, postId) {
      let commentId = uuid.v1();
      if (comment.length) {
        this.$store.dispatch("handlePosterComment", {
          [commentId]: {
            user: this.userData.userName,
            userId: this.userData.userId,
            comment,
            commentId,
            likes: [],
            postId,
            unLikes: [],
          },
        });
      }
    },
  },
};
</script>

<style scoped>
h3 {
  text-align: left;
}

.container {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
}

.container ul li {
  list-style: none;
  padding: 10px;
  text-align: left;
  background-color: blueviolet;
  margin: 2px;
  cursor: pointer;
}

.container3 {
  background-color: cornflowerblue;
}

h5 {
  text-align: left;
}

.container2 {
  width: 40%;
}

.posted {
  width: 200px;
  height: 100px;
  border: 2px solid black;
  margin: 0 auto;
}
</style>
