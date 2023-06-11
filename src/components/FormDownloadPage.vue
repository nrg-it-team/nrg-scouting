<template>
  <FormPage title="Save" ref="page">
    <FormGroup :label-type="LabelType.None" :colspan="2" align="center">
      <button @click="clearForm" style="font-size: 2em;">Save</button>
    </FormGroup>
    <FormGroup :label-type="LabelType.None" :colspan="2" align="center">
      <p style="font-size: 1.3em;"><RouterLink :to="{ name: 'home' }">🏠 Home</RouterLink></p>
    </FormGroup>
  </FormPage>
</template>

<script setup lang="ts">
import FormPage from "./FormPage.vue";
import FormGroup from "./FormGroup.vue";
import { LabelType } from "@/common/shared";
import { computed } from "vue";
import { useConfigStore, useWidgetsStore } from "@/common/stores";
import { useRouter } from "vue-router";

const config = useConfigStore();
const widgets = useWidgetsStore();

const router = useRouter();

const page = $ref<InstanceType<typeof FormPage>>();
defineExpose({ title: computed(() => page?.title), setShown: computed(() => page?.setShown) });

function clearForm() {
  widgets.save();
  router.go(0); // Reload the page
}
</script>
