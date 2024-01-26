<template>
  <section class="user_profile_wrapper pt-4 pb-4">
    <b-container class="position-relative">
      <b-row>
        <!-- Start User Information & Shared QR -->
        <b-col lg="4">
          <!-- User Information -->
          <div class="user_info bg-white p-3 mb-3 rounded_items">
            <img src="@/assets/images/user/user.svg" alt="user image" />
            <h4 class="text-capitalize mt-3 mb-3">Hala Ahmed</h4>
            <p class="bio">
              I am Hala Ahmed, I am the owner of the local brand called Beauty
              which is for Mackeup and Skin Care.
            </p>
            <div class="d-flex justify-content-between text-capitalize">
              <div class="platforms">
                <img
                  class="img"
                  src="@/assets/images/global/icons/follow-user.svg"
                  alt="following"
                />
                <div>
                  <span class="d-block numbers">5</span>
                  <span class="activity">Following</span>
                </div>
              </div>
              <div class="platforms">
                <img
                  class="img"
                  src="@/assets/images/global/icons/user-followers.svg"
                  alt="following"
                />
                <div>
                  <span class="d-block numbers">20</span>
                  <span class="activity">Followers</span>
                </div>
              </div>
              <div class="platforms">
                <img
                  class="img"
                  src="@/assets/images/global/icons/magic-star.svg"
                  alt="following"
                />
                <div>
                  <span class="d-block numbers">20</span>
                  <span class="activity">Rate</span>
                </div>
              </div>
            </div>
            <SharedAppButton class="mt-4 w_100">follow</SharedAppButton>
          </div>
          <!-- Share QR Code -->
          <div class="user_info bg-white p-3 mb-3 rounded_items">
            <div
              class="share_qr d-flex justify-content-between align-items-center"
            >
              <h4 class="text-capitalize mt-3 mb-3">QR Code</h4>
              <div class="icons_wrapper d-flex">
                <img
                  role="button"
                  src="@/assets/images/global/icons/eye.svg"
                  alt="show icon"
                />
                <img
                  role="button"
                  src="@/assets/images/global/icons/share.svg"
                  alt="share icon"
                />
                <img
                  role="button"
                  src="@/assets/images/global/icons/document-download.svg"
                  alt="document-download icon"
                />
              </div>
            </div>
            <div class="description">
              <img
                src="@/assets/images/global/icons/document-download-fill.svg"
                alt="document-download icon"
              />
              Download the QR code or share it with your friends.
            </div>
            <div class="follow_us mt-3 position-relative">
              <div class="content_qr bg-white position-relative text-center">
                <a
                  href="https://www.linkedin.com/company/mazaady/"
                  target="_blank"
                >
                  <img
                    draggable="false"
                    src="@/assets/images/global/logo.svg"
                    alt="logo"
                  />
                </a>
                <h4 class="text-capitalize mt-3 mb-3">Hala Ahmed</h4>
                <img
                  draggable="false"
                  src="@/assets/images/global/icons/qr-code.svg"
                  alt="qr-code"
                />

                <a
                  class="d-block text-capitalize mt-2 mb-1 mazaady_link"
                  href="https://www.linkedin.com/company/mazaady/"
                  target="_blank"
                >
                  Follow Us on Mazaady
                </a>
              </div>
            </div>
          </div>
        </b-col>
        <!-- End User Information & Shared QR -->

        <!-- Start Tabs Wrapper -->
        <b-col lg="8">
          <section class="bg-white p-3 rounded_items">
            <div class="main_tabs_container">
              <!-- Header -->
              <div class="tabs_header d-flex justify-content-between">
                <ul class="tabs_buttons d-flex list-unstyled mb-0">
                  <li>
                    <SharedAppButton
                      class="tab_button"
                      :class="{ active: activeTab == 'Products' }"
                      @click="switchActiveTab('Products')"
                      >Products</SharedAppButton
                    >
                  </li>
                  <li>
                    <SharedAppButton
                      class="tab_button"
                      :class="{ active: activeTab == 'Articles' }"
                      @click="switchActiveTab('Articles')"
                      >Articles</SharedAppButton
                    >
                  </li>
                  <li>
                    <SharedAppButton
                      class="tab_button"
                      :class="{ active: activeTab == 'Reviews' }"
                      @click="switchActiveTab('Reviews')"
                      >Reviews</SharedAppButton
                    >
                  </li>
                </ul>
                <SharedAppButton class="add_review"
                  ><img
                    src="@/assets/images/global/icons/plus-icon.svg"
                    alt="plus icon"
                    class="mr-1 ml-1"
                  />
                  add Review</SharedAppButton
                >
              </div>
              <!--Content For Every item -->
              <div class="tabs_content mt-3">
                <div class="products_wrapper" v-if="activeTab == 'Products'">
                  <h3
                    class="tab_title text-capitalize d-flex align-items-center mb-3"
                  >
                    Products <span class="total">( 12 )</span>
                  </h3>
                  <div
                    class="mb-4"
                    v-for="product in products"
                    :key="product.id"
                  >
                    <ReuseableProductCard
                      @click="addToFavorite"
                      :item="product"
                    ></ReuseableProductCard>
                  </div>
                </div>
                <div
                  class="coming_soon text-capitalize d-flex align-items-center justify-content-center"
                  v-if="activeTab == 'Articles' || activeTab == 'Reviews'"
                >
                  <span> {{ activeTab }} will be available soon! </span>
                </div>
              </div>
            </div>
          </section>
        </b-col>
        <!-- End Tabs Wrapper -->
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Six-piece clothing set (blouse - pants - hat and',
          startPrice: 1000,
          img: require('@/assets/images/products/product-1.svg'),
          lotStarts: ['2 days', '10 days', '50 days'],
          liveAuction: true,
        },
        {
          id: 2,
          name: 'Six-piece clothing set (blouse - pants - hat and',
          startPrice: 1000,
          img: require('@/assets/images/products/product-2.svg'),
          lotStarts: ['2 days', '10 days', '50 days'],
          liveAuction: true,
        },
        {
          id: 3,
          name: 'Jeep Car, new, used for only one time',
          startPrice: 1000,
          img: require('@/assets/images/products/product-3.svg'),
          lotStarts: ['2 days', '10 days', '50 days'],
          hotSale: true,
        },
        {
          id: 4,
          name: 'Six-piece clothing set (blouse - pants - hat and',
          startPrice: 1000,
          img: require('@/assets/images/products/product-4.svg'),
          lotStarts: ['2 days', '10 days', '50 days'],
          liveAuction: true,
        },
        {
          id: 5,
          name: 'Six-piece clothing set (blouse - pants - hat and',
          startPrice: 1000,
          img: require('@/assets/images/products/product-4.svg'),
          lotStarts: ['2 days', '10 days', '50 days'],
          liveAuction: true,
        },
      ],
      activeTab: 'Products',
    }
  },
  methods: {
    switchActiveTab(tabName) {
      this.activeTab = tabName
    },
    addToFavorite() {
      this.TriggerNotify('success', 'Product added successfully!')
    },
  },
}
</script>

<style lang="scss" scoped>
.user_profile_wrapper {
  .rounded_items {
    border-radius: 20px;
  }
  .user_info {
    text-align: initial;
    .bio {
      color: $text-color;
      @include customFontProperties(14);
    }
    .platforms {
      @include customTag(18px);
      width: calc((100% - 20px) / 3);
      .img {
        width: 20px;
        height: 20px;
      }
      .numbers {
        @include customFontProperties(14, 700);
        color: $titles-color;
      }
      .activity {
        @include customFontProperties(12);
      }
    }
    .share_qr {
      .icons_wrapper {
        gap: 10px;
      }
    }
    .description {
      @include customFontProperties(11, 400);
      @include customTag(18px);
      color: $titles-color;
      padding: 15px;
    }
    .follow_us {
      border-radius: 15px;
      padding: 15px;
      &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: $gradient-color;
        border-radius: 15px;
      }
      .content_qr {
        z-index: 3;
        border-radius: 15px;
        padding: 10px;
        .mazaady_link {
          @include customFontProperties(14, 400);
          color: $titles-color;
          transition: all 0.3s ease-in-out;
          &:hover {
            text-decoration: none;
            color: $second-color;
            transform: translateX(3px);
          }
        }
      }
    }
  }
  .main_tabs_container {
    .tabs_header {
      .tabs_buttons {
        gap: 10px;
      }
    }
    .tab_title {
      @include customFontProperties(28, 700, 1.7);
      color: $titles-color;
      .total {
        @include customFontProperties(14, 400, 1.7);
        color: $text-color;
        padding-inline-start: 8px;
      }
    }
    .coming_soon {
      min-height: 300px;
      @include customFontProperties(17, 500);
      color: $main-color;
    }
  }
}
</style>
