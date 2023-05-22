<template>
  <div class="h-auto w-100">
    <div v-if="data" class="h-auto w-100 border-0">
      <div class="position-relative">
        <div class="row" style="z-index:10">
          <div class="col-sm-12 col-md-5 col-lg-5 card-legend-bg drop-shadow">
            <img :src="data.thumbnail.large" :alt="data.name" class="w-100" style="max-width: 500px">
          </div>
          <div class="col-sm-12 col-md-7 col-lg-7">
            <div class="mb-4">
              <h1 class="text-start card-title text-white text-uppercase fw-bolder" style="font-size: 3rem">{{ data.nickname }}</h1>
              <p class="mb-0 text-start text-white">{{ data.name }} | {{ data.age }}</p>
              <p class="text-start text-white">{{ data.home }}</p>
            </div>
            <div class="overflow-auto mb-4" style="max-height: 300px">
              <p v-html="data.desc" class="text-white text-start"></p>
            </div>
            <div>
              <h4 class=" text-start text-white">Ability</h4>
              <div v-for="ability in data.ability" :key="ability.title" class="mb-3">
                <div class="d-flex align-items-center">
                  <img :src="ability.icon" :alt="ability.title" width="120" class="ability">
                  <div class="text-white text-start">
                    <span class="text-uppercase fw-bold">{{ ability.title }}</span> | <span>{{ ability.type }}</span> 
                    <br>
                    <div class="text-white text-start mt-2">{{ ability.desc }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="trailer" :style="`background-image:url(${getUrl(data.yt_trailer)}); z-index-1`"></div> -->
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Card',
  props: {
    data: {
      type: Object,
      default: null,
    }
  },
}
</script>

<style scoped>
  .drop-shadow {
    border-radius: 0px 0px 200px 200px;
    float:right;
  }
  .drop-shadow img {
    filter: drop-shadow(-10px 15px 3px rgb(15, 14, 14));
    transition-duration: 300ms;
  }

  .ability {
    filter: drop-shadow(5px 5px 5px rgb(15, 14, 14));
  }

</style>
