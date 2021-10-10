<template>
  <div class="orangehrm-container">
    <oxd-card-table
      :headers="headers"
      :items="items"
      @click="onClick"
      :selectable="true"
      :clickable="true"
      v-model:selected="checkedItems"
      rowDecorator="oxd-table-decorator-card"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CardTable from "@ohrm/oxd/core/components/CardTable/CardTable.vue";

export default defineComponent({
  name: "CardTable",
  data() {
    return {
      headers: [
        {
          name: "title",
          slot: "title",
          title: "Job Title",
          style: { "flex-basis": "20%" },
        },
        {
          name: "description",
          title: "Description",
          style: { "flex-basis": "50%" },
        },
        {
          name: "action",
          slot: "action",
          title: "Action",
          cellType: "oxd-table-cell-actions",
          cellConfig: {
            delete: {
              onClick(item, e) {
                console.log(item);
                console.log(e);
              },
              component: "oxd-icon-button",
              props: {
                name: "trash",
              },
            },
            edit: {
              onClick(item, e) {
                console.log(item);
                console.log(e);
              },
              props: {
                name: "pencil-fill",
              },
            },
          },
        },
      ],
      items: [],
      checkedItems: [],
    };
  },

  components: {
    "oxd-card-table": CardTable,
  },

  methods: {
    onClick(e) {
      console.log(e);
    },
  },

  beforeMount() {
    this.items = new Array(10).fill(null).map((_, index) => {
      return {
        id: index,
        title: "Art Director " + index,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      };
    });
  },
});
</script>

<style lang="scss">
.oxd-table-body > div:nth-child(2) {
  background: #ffb682;
}
.oxd-table-body > div:nth-child(4n) {
  background: #82ffe0;
}
</style>
