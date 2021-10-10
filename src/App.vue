<template>
  <SampleForm></SampleForm>
  <br/>
  <HtmlForm></HtmlForm>
  <br/>
  <CardTable></CardTable>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SampleForm from "./components/SampleForm.vue";
import HtmlForm from "./components/HtmlForm.vue";
import CardTable from "./components/CardTable.vue";

export default defineComponent({
  name: "App",
  components: {
    SampleForm,
    HtmlForm,
    CardTable
  },
});
</script>
