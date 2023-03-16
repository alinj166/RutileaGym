<template>
    <div>
      <v-btn depressed
             color="primary"
             text
             v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)">
     {{entry.title}}
      </v-btn>
    </div>
</template>

<script>
import i18n from '@/plugins/i18n.js';
export default {

  mounted() {

  },
  data: () => ({
    dialog: false,
    languages: [
      {flag: 'us', language: 'en', title: 'English'},
      {flag: 'jp', language: 'ja', title: 'Japanese'},
    ]
  }),
  components: {},
  props: {},
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
    }
  }
}
</script>

<style scoped>

</style>