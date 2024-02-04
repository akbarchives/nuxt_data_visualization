<template>
  <div class="flex items-center bg-blue-800 text-white py-4 px-8">
    <div class="text-xl">BTJ anime</div>
    <div class="flex items-center space-x-4 ml-4">
      <NuxtLink
        to="/"
        class="px-3 py-2 rounded-md hover:bg-gray-600"
        >Anime
      </NuxtLink>
      <NuxtLink
        to="/manga"
        class="px-3 py-2 rounded-md hover:bg-gray-600"
        >Manga
      </NuxtLink>
      <NuxtLink
        to="/chart"
        class="px-3 py-2 rounded-md hover:bg-gray-600"
        >Charts
      </NuxtLink>
      <NuxtLink
        to="/advance"
        class="px-3 py-2 rounded-md hover:bg-gray-600"
        >Advance Charts
      </NuxtLink>
      <NuxtLink
        to="/penduduk"
        class="px-3 py-2 rounded-md hover:bg-gray-600"
        >Data Kependudukan
      </NuxtLink>
    </div>
  </div>

  <slot> </slot>
</template>
