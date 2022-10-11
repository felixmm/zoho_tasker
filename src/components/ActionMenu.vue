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
const emit = defineEmits(["on-zoho-text", "on-pr-text"]);

function onZohoText() {
  emit("on-zoho-text");
}

function onPrText() {
  emit("on-pr-text");
}
</script>