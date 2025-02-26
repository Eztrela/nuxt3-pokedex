// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-primevue',
  ],
  primevue: {
    options: {
      unstyled: true
    },
    importPT: { as: 'presets', from: '@/presets' }
}
})
