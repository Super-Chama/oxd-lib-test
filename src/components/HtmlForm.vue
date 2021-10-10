<template>
  <div class="form">
    <oxd-text tag="h5">HTML Form Validation</oxd-text>

    <oxd-divider />

    <form @submit.prevent="log" @reset="log">
      <oxd-input-group label="Browser validation field (required)">
        <oxd-input v-model="fieldset.value1" required />
      </oxd-input-group>
      <br />
      <oxd-input-group label="Browser validation field (numbers)">
        <oxd-input v-model="fieldset.value2" type="number" />
      </oxd-input-group>
      <br />
      <oxd-input-group label="Browser validation field (min, max)">
        <oxd-input v-model="fieldset.value3" type="number" min="1" max="5" />
      </oxd-input-group>
      <br />
      <oxd-input-group label="Browser validation field (required)">
        <oxd-switch-input
          v-model="fieldset.value4"
          value="orange"
          optionLabel="Orange"
          required
        />
      </oxd-input-group>
      <br />
      <oxd-divider />
      <div>
        <oxd-button
          @click="onReset"
          displayType="ghost"
          type="reset"
          label="Reset"
        />
        <oxd-button
          type="submit"
          class="orangehrm-left-space"
          displayType="secondary"
          label="Submit"
        />
      </div>
    </form>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Button from "@ohrm/oxd/core/components/Button/Button.vue";
import Divider from "@ohrm/oxd/core/components/Divider/Divider.vue";
import Text from "@ohrm/oxd/core/components/Text/Text.vue";
import InputGroup from "@ohrm/oxd/core/components/InputField/InputGroup.vue";
import Input from "@ohrm/oxd/core/components/Input/Input.vue";
import SwitchInput from "@ohrm/oxd/core/components/Input/SwitchInput.vue";

const formModel = {
  value1: "",
  value2: "",
  value3: "",
  value4: "",
};

export default defineComponent({
  name: "HtmlForm",

  data() {
    return {
      fieldset: {
        ...formModel,
      },
      opts: [
        { id: 1, label: "One" },
        { id: 2, label: "Two" },
      ],
    };
  },

  components: {
    "oxd-divider": Divider,
    "oxd-button": Button,
    "oxd-text": Text,
    "oxd-input-group": InputGroup,
    "oxd-input": Input,
    "oxd-switch-input": SwitchInput,
  },

  methods: {
    onSave() {
      console.log("form submit");
    },
    onReset() {
      this.fieldset = { ...formModel };
    },
  },
});
</script>
