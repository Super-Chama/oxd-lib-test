<template>
  <OxdCalendar v-model="date" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { OxdCalendar } from "@eth0/oxd-experimental";

export default defineComponent({
  name: "App",
  components: {
    OxdCalendar,
  },
  data() {
    return {
      date: null,
    };
  },
});
</script>

<style>
@import "~bootstrap-icons/font/bootstrap-icons.css";
</style>
