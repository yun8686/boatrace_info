<template>
  <v-card>
    <v-tabs
      light
      :show-arrows="!isMobileAny"
    >
      <v-tab
        v-for="tab in tabs"
        :key="tab.id"
        :href="'#tab-'+tab.id"
      >
        {{ tab.id }}. {{tab.name }}
      </v-tab>

      <v-tab-item
        v-for="tab in tabs"
        :key="tab.id"
        :value="'tab-' + tab.id"
      >
        <RaceCard :title="tab.name" />
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>
<script>
  import placeInfo from '@/plugins/placeInfo.js';
  import isMobile from 'ismobilejs';
  import RaceCard from '../raceCard.vue';
  export default {
    data () {
      console.log(this.$route.params.raceid);
      return {
        isMobileAny: isMobile.any,
        tabs: placeInfo.list,
      }
    },
    methods: {
      isValid: ()=>{return false},
    },
    components: {
      RaceCard,
    }
  }
</script>
