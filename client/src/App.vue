<template>
  <v-app style="background: #e3e3ee">
    <v-app-bar fixed color="primary" dark>
      <v-app-bar-nav-icon
        @click="toggleSideNav"
        class="mr-2"
      ></v-app-bar-nav-icon>
      <v-navigation-drawer
        app
        temporary
        fixed
        light
        v-model="sideNav"
        color="#fff"
        style="z-index: 1"
      >
        <v-toolbar color="accent" dark flat>
          <v-app-bar-nav-icon @click="toggleSideNav"></v-app-bar-nav-icon>
          <v-toolbar-title class="hidden-xs-only">
            <router-link to="/" tag="span">
              <h1 class="pl-1">VueShare</h1>
            </router-link>
          </v-toolbar-title>
        </v-toolbar>
        <v-divider></v-divider>
        <v-list>
          <v-list-item
            v-for="item in sideNavItems"
            :key="item.title"
            :to="item.link"
            style="color: #000!important"
            ripple
          >
            <v-list-item-icon>
              <v-icon style="color: #000!important">{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-toolbar-title class="hidden-xs-only">
        <router-link to="/" tag="span">VueShare</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-text-field
        flex
        prepen-icon="search"
        placeholder="Search post"
        color="accent"
        single-line
        hide-details
      ></v-text-field>

      <v-spacer></v-spacer>
      <v-btn
        dark
        depressed
        class="mx-1 hidden-xs-only"
        color="primary"
        v-for="item in horizontalNavItems"
        :key="item.title"
        :to="item.link"
      >
        <v-icon left class="hidden-sm-only"> {{ item.icon }}</v-icon>
        {{ item.title }}
      </v-btn>
    </v-app-bar>
    <v-main class="mt-5">
      <v-container class="mt-5">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    sideNav: false,
  }),
  computed: {
    horizontalNavItems() {
      return [
        {
          icon: "chat",
          title: "Posts",
          link: "/post",
        },
        { icon: "lock_open", title: "Sign In", link: "/signin" },
        { icon: "create", title: "Sign Up", link: "/signup" },
      ];
    },
    sideNavItems() {
      return [
        {
          icon: "chat",
          title: "Posts",
          link: "/post",
        },
        { icon: "lock_open", title: "Sign In", link: "/signin" },
        { icon: "create", title: "Sign Up", link: "/signup" },
      ];
    },
  },
  methods: {
    toggleSideNav() {
      this.sideNav = !this.sideNav;
    },
  },
};
</script>
