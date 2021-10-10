<template>
  <div class="form">
    <oxd-text tag="h5">Vee-validate/Yup Form Validation</oxd-text>

    <oxd-divider />

    <form @submit.prevent="submitForm">
      <oxd-input-group label="Email" :message="errors.email">
        <oxd-input name="email" v-model="email" />
      </oxd-input-group>
      <br />
      <oxd-input-group label="Password" :message="errors.password">
        <oxd-password-input name="password" v-model="password" />
      </oxd-input-group>
      <br />
      <oxd-input-group label="Role" :message="errors.role">
        <oxd-select-input
          name="role"
          v-model="role"
          :options="[
            { id: 1, label: 'All' },
            { id: 2, label: 'Admin' },
            { id: 3, label: 'ESS' },
          ]"
        />
      </oxd-input-group>
      <br />

      <oxd-divider />
      <div>
        <oxd-button @click="resetForm" displayType="ghost" label="Reset" />
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
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import Button from "@ohrm/oxd/core/components/Button/Button.vue";
import Divider from "@ohrm/oxd/core/components/Divider/Divider.vue";
import Text from "@ohrm/oxd/core/components/Text/Text.vue";
import InputGroup from "@ohrm/oxd/core/components/InputField/InputGroup.vue";
import Input from "@ohrm/oxd/core/components/Input/Input.vue";
import PasswordInput from "@ohrm/oxd/core/components/Input/PasswordInput.vue";
import SelectInput from "@ohrm/oxd/core/components/Input/Select/SelectInput.vue";

export default defineComponent({
  name: "YupForm",

  setup() {
    /**
     * take example from vee validate documentation
     * as seen on
     * https://vee-validate.logaretm.com/v4/guide/composition-api/validation#displaying-errors-with-useform
     */
    // Define a validation schema
    const schema = yup.object({
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
      role: yup.object().required(),
    });
    // Create a form context with the validation schema
    const { submitForm, errors, resetForm } = useForm({
      validationSchema: schema,
    });
    // No need to define rules for fields
    const { value: email } = useField("email");
    const { value: password } = useField("password");
    const { value: role } = useField("role");
    return {
      errors,
      email,
      password,
      role,
      submitForm,
      resetForm,
    };
  },

  components: {
    "oxd-divider": Divider,
    "oxd-button": Button,
    "oxd-text": Text,
    "oxd-input-group": InputGroup,
    "oxd-input": Input,
    "oxd-password-input": PasswordInput,
    "oxd-select-input": SelectInput,
  },
});
</script>
