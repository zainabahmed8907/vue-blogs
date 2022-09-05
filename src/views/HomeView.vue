<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost v-for="(post, index) in samplePost" :post="post" :key="index" />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
          <BlogCardVue
            v-for="(post, index) in sampleBlogCards"
            :key="index"
            :post="post"
          />
        </div>
      </div>
    </div>
    <div class="updates">
      <div class="container">
        <h2>Never miss a post. Register your free acccount today!</h2>
        <router-link class="router-button" to="#"
          >Register for FireBlogs
          <span class="arrow arrow-light"
            ><img src="../assets/Icons/arrow-right-light.svg" /></span
        ></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "@/components/BlogPost";
import BlogCardVue from "../components/BlogCard.vue";
import store from "@/store";
export default {
  name: "HomeView",
  components: {
    BlogPost,
    BlogCardVue,
  },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost:
          "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
        welcomeScreen: true,
        photo: "coding",
      },
      samplePost: [
        {
          title: "This is a filter title",
          blogHTML: "This is an exmple post title",
          blogCoverPhoto: "beautiful-stories",
        },
      ],
    };
  },
  computed: {
    sampleBlogCards() {
      return store.state.sampleBlogCards;
    },
  },
};
</script>
<style lang="scss" scoped>
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}
.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }
    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }
    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media (min-width: 800px) {
        text-align: initial;
        font-size: 40px;
      }
    }
  }
}
</style>
