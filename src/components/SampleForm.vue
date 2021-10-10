<template>
  <oxd-grid :cols="2">
    <div class="form">
      <oxd-text tag="h5">Sample Form</oxd-text>

      <oxd-divider />

      <oxd-form ref="form" @submit="log" @reset="log" @submitValid="onSave">
        <oxd-form-row>
          <oxd-input-field
            :key="fieldset.field.id"
            :type="fieldset.field.id"
            :options="opts"
            label="Test Field"
            v-model="fieldset.value"
            @click="log"
            @blur="log"
            @focus="log"
            @input="log"
            @change="log"
            @mouseenter="log"
            @mouseleave="log"
            @mouseover="log"
            @keypress="log"
            @update:modelValue="log"
          />
        </oxd-form-row>

        <oxd-form-row>
          <oxd-input-field
            type="select"
            label="Change Test Field"
            :showEmptySelector="false"
            :options="fields"
            v-model="fieldset.field"
          />
        </oxd-form-row>

        <oxd-form-row>
          <oxd-input-field
            type="file"
            label="Upload field (images only, mime type)"
            buttonLabel="Browse"
            accept="image/*"
            v-model="fieldset.file1"
          />
        </oxd-form-row>

        <oxd-form-row>
          <oxd-input-field
            type="file"
            label="Upload field (csv only, specific)"
            buttonLabel="Browse"
            accept=".csv"
            v-model="fieldset.file2"
          />
        </oxd-form-row>

        <oxd-form-row>
          <oxd-input-field
            type="date"
            label="Date (default)"
            v-model="fieldset.date1"
          />
        </oxd-form-row>

        <oxd-form-row>
          <oxd-input-field
            type="date"
            label="Date (custom years)"
            :years="[1900, 1901, 1902]"
            v-model="fieldset.date2"
          />
        </oxd-form-row>

        <oxd-form-row>
          <oxd-input-field
            label="Validation field"
            v-model="fieldset.textvalid"
            :rules="rules.textvalid"
            required
          />
        </oxd-form-row>

        <oxd-divider />
        <oxd-form-actions>
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
        </oxd-form-actions>
      </oxd-form>
    </div>
    <div class="events">
      <oxd-text tag="p">
        Basic events log will show here, check console for details
      </oxd-text>
      <p>Form state {{ form && form.isProcessing ? "busy" : "idle" }}</p>
      <p>Form is {{ form && form.isFromInvalid ? "invalid" : "valid" }}</p>
      <p>Errorbag {{ form && form.errorbag }}</p>
      <pre ref="logelm"></pre>
    </div>
  </oxd-grid>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Button from "@ohrm/oxd/core/components/Button/Button.vue";
import Form from "@ohrm/oxd/core/components/Form/Form.vue";
import FormRow from "@ohrm/oxd/core/components/Form/FormRow.vue";
import FormActions from "@ohrm/oxd/core/components/Form/FormActions.vue";
import InputField from "@ohrm/oxd/core/components/InputField/InputField.vue";
import Divider from "@ohrm/oxd/core/components/Divider/Divider.vue";
import Text from "@ohrm/oxd/core/components/Text/Text.vue";
import Grid from "@ohrm/oxd/core/components/Grid/Grid.vue";

const formModel = {
  value: null,
  file1: null,
  file2: null,
  date1: null,
  date2: "1990-01-01",
  field: { id: "input", label: "Text Input" },
  textvalid: "",
};

export default defineComponent({
  name: "SampleForm",

  setup() {
    const form = ref(null);
    const logelm = ref(null);
    return {
      form,
      logelm,
    };
  },

  data() {
    return {
      fieldset: {
        ...formModel,
      },
      fields: [
        { id: "input", label: "Text Input" },
        { id: "textarea", label: "Textarea Input" },
        { id: "password", label: "Password Input" },
        { id: "checkbox", label: "Checkbox Input" },
        { id: "file", label: "File Input" },
        { id: "switch", label: "Switch Input" },
        { id: "radio", label: "Radio Input" },
        { id: "date", label: "Date Input" },
        { id: "time", label: "Time Input" },
        { id: "select", label: "Select Input" },
        { id: "multiselect", label: "Multi-select Input" },
      ],
      opts: [
        { id: 1, label: "One" },
        { id: 2, label: "Two" },
      ],
      rules: {
        textvalid: [(v: string) => (!!v && v.trim() !== "") || "Required"],
      },
    };
  },

  components: {
    "oxd-form": Form,
    "oxd-form-row": FormRow,
    "oxd-input-field": InputField,
    "oxd-form-actions": FormActions,
    "oxd-divider": Divider,
    "oxd-button": Button,
    "oxd-text": Text,
    "oxd-grid": Grid,
  },

  methods: {
    onSave() {
      this.logger("valid form submit");
    },
    onReset() {
      (this.form as any).errorbag = [];
      this.fieldset = { ...formModel };
    },
    log($event: Event) {
      // for native events
      if ($event?.type) {
        this.logger($event.type);
      } else {
        this.logger($event);
      }
      console.log($event);
    },
    logger(...args: any) {
      for (let i = 0; i < args.length; i++) {
        if (typeof args[i] == "object") {
          (this.logelm as any).innerHTML +=
            (JSON && JSON.stringify
              ? JSON.stringify(args[i], undefined, 2)
              : args[i]) + "<br />";
        } else {
          (this.logelm as any).innerHTML += args[i] + "<br />";
        }
      }
    },
  },

  watch: {
    field(val) {
      if (val && val.id === "multiselect") {
        (this.fieldset as any).value = [];
      } else {
        this.fieldset.value = null;
      }
    },
  },
});
</script>

<style lang="scss">
@import "@ohrm/oxd/styles/_colors.scss";

html,
body {
  padding: 0;
  margin: 1rem;
  background-color: $oxd-interface-gray-lighten-2-color;
}

.form,
.events {
  padding: 1.5rem;
  box-sizing: border-box;
  background-color: $oxd-white-color;
}
.events {
  margin: 0;
  margin-left: 1rem;
}
.orangehrm-left-space {
  margin-left: 10px;
}
.orangehrm-container {
  background-color: #f6f5fb;
  border-radius: 1.2rem;
  padding: 0.5rem;
}
</style>
