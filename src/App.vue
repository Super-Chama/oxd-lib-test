<template>
  <SampleForm></SampleForm>
  <br />
  <HtmlForm></HtmlForm>
  <br />
  <YupForm></YupForm>
  <br />
  <CardTable></CardTable>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SampleForm from "./components/SampleForm.vue";
import HtmlForm from "./components/HtmlForm.vue";
import YupForm from "./components/YupForm.vue";
import CardTable from "./components/CardTable.vue";

export default defineComponent({
  name: "App",
  components: {
    SampleForm,
    HtmlForm,
    YupForm,
    CardTable,
  },
});
</script>
