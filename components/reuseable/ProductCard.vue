<template>
  <div class="product_card_wrapper position-relative">
    <div class="product_img position-relative">
      <img
        class="img d-block"
        draggable="false"
        :src="item.img"
        alt="item.name"
      />
      <div
        class="status_wrapper position-absolute w-100 d-flex justify-content-end text-white text-capitalize text-center"
      >
        <span v-if="item.liveAuction" class="status">Live auction</span>
        <span v-if="item.hotSale" class="status hot_sale">hot sale</span>
      </div>
    </div>
    <div class="product_details text-capitalize flex-grow-1">
      <h6 class="m-0">{{ item.name }}</h6>
      <div class="d-flex mt-3 mb-3 align-items-center">
        <span class="price_start"> starting price </span>
        <span class="price"> {{ item.startPrice }} EGP </span>
      </div>
      <div class="d-md-flex align-items-center">
        <span class="price_start d-block mb-2 mb-md-0"> Lot starts in </span>
        <div class="lots d-flex">
          <div class="every_lot" v-for="(lot, i) in item.lotStarts" :key="i">
            <span>{{ lot }}</span>
          </div>
        </div>
      </div>
    </div>
    <div
      class="add_to_favorite d-flex justify-content-center align-items-center rounded-circle"
    >
      <img
        role="button"
        v-if="item.liveAuction"
        src="@/assets/images/global/icons/heart.svg"
        alt="favorite heart"
        @click="handlerClick"
      />
      <img
        role="button"
        v-if="item.hotSale"
        src="@/assets/images/global/icons/heart-fill.svg"
        alt="favorite heart"
        @click="handlerClick"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  emits: ['click'],
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handlerClick() {
      this.$emit('click')
    },
  },
}
</script>

<style lang="scss" scoped>
.product_card_wrapper {
  // border: 1px solid #ccc;
  display: flex;
  gap: 20px;
  @media screen and (max-width: 767px) {
    gap: 10px;
  }
  .product_img {
    width: 145px;
    height: 127px;
    border-radius: 28px;
    @media screen and (max-width: 767px) {
      width: 87px;
      height: 87px;
    }
    img {
      border-radius: 28px;
      width: 145px;
      height: 127px;
      @media screen and (max-width: 767px) {
        width: 87px;
        height: 87px;
      }
    }
    .status_wrapper {
      position: absolute;
      bottom: 0;
      display: flex;
      left: 0;
      width: 100%;
      @media screen and (max-width: 767px) {
        bottom: 5px;
      }
      .status {
        min-width: 115px;
        background: $main-color;
        border-radius: 28px 0px 28px 0px;
        font-size: 14px;
        padding: 8px;
        @media screen and (max-width: 767px) {
          min-width: 66px;
          font-size: 8px;
          padding: 4px;
        }
        &.hot_sale {
          background: $second-color;
        }
      }
    }
  }
  .product_details {
    text-align: initial;
    // background: #eee;
    h6 {
      @include customFontProperties(18, 400);
      color: $titles-color;
      @media screen and (max-width: 576px) {
        font-size: 12px;
      }
    }
    .price_start {
      color: $text-color;
      padding-inline-end: 10px;
    }
    .lots {
      gap: 5px;
      .every_lot {
        @include customTag(24px);
        min-width: 80px;
        @media screen and (max-width: 576px) {
          min-width: 70px;
        }
      }
    }
  }
  .add_to_favorite {
    background-color: $white-color;
    width: 24px;
    height: 24px;
    @media screen and (max-width: 767px) {
      position: absolute;
      top: 12px;
      left: 7px;
      img {
        width: 15px;
        height: 15px;
      }
    }
  }
}
</style>
