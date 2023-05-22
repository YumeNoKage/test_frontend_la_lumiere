<template>
  <div class="position-relative">
    <div class="w-100 position-absolute top-0 start-0" style="z-index: 100; background-color: #1a1d20">
      <Navigation/>
    </div>
    <router-view/>
  </div>
</template>

<style>
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f100;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>