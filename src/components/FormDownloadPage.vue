<template>
  <FormPage title="Save" ref="page">
    <FormGroup :label-type="LabelType.None" :colspan="2" align="center">
      <button @click="clearForm">1: Save This Match or Event</button>
    </FormGroup>
    <FormGroup :label-type="LabelType.None" :colspan="2" align="center">
    <h2>Download Files</h2>
    </FormGroup>
    <FormGroup :label-type="LabelType.None" :colspan="2" align="center">
      <span v-if="widgets.downloadLink === null">No Saved Data</span>
      <a v-else :download="`scouted-${config.name}.csv`" :href="widgets.downloadLink"><h3>2: Download All Data</h3></a>
    </FormGroup>
    <FormGroup :label-type="LabelType.None" :colspan="2" align="center">
      <RouterLink :to="{ name: 'inspector' }">(View Data)</RouterLink>
    </FormGroup>
    <FormGroup :label-type="LabelType.None" :colspan="2" align="center">
      <h2>Upload Files</h2>
    </FormGroup>
    <FormGroup :label-type="LabelType.None" :colspan="2" align="center">
      <a href="https://drive.google.com/drive/folders/1NtR30lREQ7iG0MDv68IyeY8xpLwR8bAr?usp=sharing" target="_blank" rel="noreferrer noopener">3a) Matches</a>
    </FormGroup>
    <FormGroup :label-type="LabelType.None" :colspan="2" align="center">
      <a href="https://drive.google.com/drive/folders/1v3QXy6MBwSYVFjoAW8mT6sXGdrq67-1z?usp=sharing" target="_blank" rel="noreferrer noopener">3b) Pits</a>
    </FormGroup>
    <FormGroup :label-type="LabelType.None" :colspan="2" align="center">
      <a href="https://drive.google.com/drive/folders/1HPsNYshzWU4ui0JbbwP4etr38vCQrwNm?usp=sharing" target="_blank" rel="noreferrer noopener">3c) Outreach</a>
    </FormGroup>
    <FormGroup :label-type="LabelType.None" :colspan="2" align="center">
      <RouterLink :to="{ name: 'home' }">Home</RouterLink>
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
