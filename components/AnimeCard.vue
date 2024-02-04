<template>
  <NuxtImg
    :alt="anime.title"
    width="200px"
    height="300px"
    format="avif"
    :src="anime.images.webp.image_url"
  />
  <div class="line-clamp-1">{{ anime.title }}</div>
</template>

<script>
export default {
  props: {
    anime: {
      type: Object,
      required: true,
    },
  },
};
</script>
