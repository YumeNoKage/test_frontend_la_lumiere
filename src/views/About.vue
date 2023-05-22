<template>
  <div class="home bg-dark pt-4">
    <div v-if="!isLoading && data">
      <Carousel
      :slides-per-view="1"
      :space-between="50"
      :wrap-around="true"
      :modelValue="$route.query.index && $route.query.index <=data.length - 1 ? $route.query.index : 0"
      >
        <Slide v-for="item in data" :key="item._id.$oid" class="position-relative" style="width: 100vw; height: 93vh">
          <div class="trailer" :style="`background-image:url(${getUrl(item.yt_trailer)}); z-index-1`"></div>
          <Card :data="item"/>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
    <div v-else-if="isLoading && !data" class="row">
      <Loading />
    </div>
    <div v-else-if="!isLoading && !data">
      Data Tidak Ada
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card/Card.vue'
import { mapActions, mapGetters } from 'vuex'

import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default {
  name: 'About',
  components: {
    Card,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },

  data(){
    return{
      currentSlide: null
    }
  },

  computed: {
    ...mapGetters({
      data: 'listData',
      isLoading: 'isLoading',
    })
  },

  methods: {
    ...mapActions({
      getData: 'getData'
    }),

    getUrl(url){
      const id = url.split('v=')[1]
      return `https://img.youtube.com/vi/` + id + '/maxresdefault.jpg'
    },

    updateQuery(_,query){
      console.log(_, query)
    },
  },

  mounted() {
    this.getData()
  },
}
</script>

<style>
.home {
  height: 100vh;
}

.trailer {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 100vh;
  transform: translate(-50%, -50%);
  background-repeat: no-repeat;
  background-size: cover;
  opacity: .1;
}
</style>