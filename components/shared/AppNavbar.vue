<template>
  <header class="bg-white main_app_header d-flex align-items-center">
    <b-container>
      <b-navbar>
        <div class="app_pages d-flex align-items-center">
          <b-navbar-brand class="navbar_brand" :to="localePath('/')">
            <img src="@/assets/images/global/logo.svg" alt="logo" />
          </b-navbar-brand>
          <img
            role="button"
            src="@/assets/images/global/icons/menu.svg"
            class="menu_bar"
            alt="menu"
            @click="showLinks"
          />
          <b-navbar-nav
            class="text-capitalize links_list"
            :class="{ show: showList }"
          >
            <b-nav-item active :to="localePath('/')">home</b-nav-item>
            <b-nav-item active :to="localePath('/blog')">Blog</b-nav-item>
            <b-nav-item active :to="localePath('/gifts')">Gifts</b-nav-item>
            <b-nav-item active :to="localePath('/categories')"
              >Categories</b-nav-item
            >
          </b-navbar-nav>
        </div>
        <div class="auth_wrapper d-flex align-items-center">
          <div class="auth_actions d-flex align-items-center">
            <img
              role="button"
              src="@/assets/images/global/icons/search.svg"
              alt="search"
            />
            <span class="notification">
              <img
                role="button"
                src="@/assets/images/global/icons/notification.svg"
                alt="notification"
              />
            </span>
            <nuxt-link :to="localePath(`/profile`)">
              <img
                role="button"
                src="@/assets/images/user/user.svg"
                alt="user"
                class="user_img rounded-circle"
              />
            </nuxt-link>
          </div>
          <div class="language d-none d-lg-flex align-items-center">
            <SharedAppButton class="add_review mr-3 ml-3"
              ><img
                src="@/assets/images/global/icons/add-circle.svg"
                alt="plus icon"
                class="mr-1 ml-1"
              />
              Add new product</SharedAppButton
            >
            <b-dropdown class="lang_switcher" no-caret>
              <template #button-content>
                <img
                  src="@/assets/images/global/icons/global.svg"
                  alt="global icon"
                />
                <span v-if="$i18n.locale == 'en'">EN</span>
                <span v-if="$i18n.locale == 'ar'">العربية</span>
              </template>
              <b-dropdown-item> EN </b-dropdown-item>
              <b-dropdown-item> العربية </b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
      </b-navbar>
    </b-container>
  </header>
</template>

<script>
export default {
  name: 'AppNavbar',
  data() {
    return {
      showList: false,
    }
  },
  methods: {
    showLinks() {
      this.showList = !this.showList
    },
  },
}
</script>

<style lang="scss" scoped>
.main_app_header {
  height: 68px;
  .navbar {
    justify-content: space-between;
  }
  .links_list {
    gap: 15px;
  }
  .nav-link {
    color: $text-color;
    @include customFontProperties(18, 400);
    position: relative;
    &::before {
      position: absolute;
      content: '';
      background-color: $main-color;
      top: 121%;
      height: 7px;
      width: 100%;
      left: 0;
      border-radius: 8px 8px 0px 0px;
      display: none;
      @media screen and (max-width: 767px) {
        top: 100%;
        width: 30%;
        left: 35%;
      }
    }
    &.nuxt-link-exact-active {
      color: $main-color;
      &::before {
        display: block;
      }
    }
  }
  .app_pages {
    position: relative;
    .menu_bar {
      display: none;
    }
    @media screen and (max-width: 767px) {
      flex-direction: row-reverse;
      gap: 10px;
      .menu_bar {
        display: block;
      }
      .links_list {
        background-color: $white-color;
        position: fixed;
        top: 68px;
        z-index: 88;
        width: 100%;
        left: 0;
        height: 140px;
        display: block;
        text-align: center;
        padding: 10px;
        display: none;
        &.show {
          display: block;
        }
      }
    }
  }
  .auth_wrapper {
    .auth_actions {
      gap: 20px;
      .user_img {
        width: 40px;
        height: 40px;
      }
    }
  }
}
</style>
