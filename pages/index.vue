<template>
  <div class="flex justify-between px-8 py-4">
    <div class="text-xl">Anime List</div>
    <input
      class="bg-gray-100 p-2 rounded-sm"
      type="text"
      name=""
      id=""
      placeholder="search"
    />
  </div>

  <div class="px-8 py-4 grid grid-cols-5 gap-x-3 gap-y-4 my-4">
    <div
      v-for="(item, index) in items"
      :key="index"
      class=""
    >
      <LazyAnimeCard :anime="item" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },

  mounted() {
    this.fetchAnimeList();
  },

  methods: {
    async fetchAnimeList() {
      const resp = await fetch('https://api.jikan.moe/v4/anime');
      const body = await resp.json();
      this.items = body.data;
      console.log(body);
    },
  },
};
</script>
