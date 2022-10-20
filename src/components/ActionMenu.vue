<template>
  <div class="row mt-4 text-center">
    <div class="col-12">
      <button
        type="button"
        title="Zoho Text"
        class="btn py-4"
        @click="onZohoText"
      >
        <i class="fa-solid fa-file-lines action-btn font-30" />
      </button>
    </div>
    <div class="col-12">
      <button
        type="button"
        title="Pull Request Text"
        class="btn py-4"
        @click="onPrText"
      >
        <i class="fa-solid fa-code action-btn font-30" />
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  tasks: {
    type: Array,
    default: () => [],
    required: true,
  },
});

const emit = defineEmits(["on-zoho-text", "on-pr-text"]);

function onZohoText() {
  const text = `PR Text?`;
  emit("on-zoho-text", text);
}

function onPrText() {
  const text = `Sesión de trabajo realizando la programación necesaria para cumplir
  con el requerimiento asignado ejecutando las tareas US
  <br />
  ###Related Issues<br />
  US<br />
  TASK1<br />
  TASK2<br />
  <br />
  ###Types of change<br />
  [ ] Bug fix (non-breaking change which fixes an issue)<br />
  [X] New feature (non-breaking change which adds functionality)<br />
  [ ] Breaking change (fix or feature that would cause existing
  functionality to change)<br />
  <br />
  ###Checklist<br />
  [X] My code follows the code style of this project.<br />
  [ ] My change requires a change to the documentation.<br />
  [ ] I have updated the documentation accordingly.<br />
  [ ] I have read the CONTRIBUTING document
  (https://cdevteam.netlify.app/).<br />
  [ ] I have added tests to cover my changes.<br />
  [ ] All new and existing tests passed.<br />`;
  emit("on-pr-text", text);
}
</script>