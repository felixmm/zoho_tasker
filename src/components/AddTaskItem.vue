<template>
  <div>
    <div class="row form-group font-22 border-bottom">
      <div class="col-2 py-2 border-right">
        <input
          v-model="model.us"
          class="form-control input-sm text-center"
          type="number"
        />
      </div>
      <div class="col-2 py-2 border-right">
        <input
          v-model="model.task"
          class="form-control input-sm text-center"
          type="number"
        />
      </div>
      <div class="col-5 py-2 border-right">
        <input
          v-model="model.title"
          class="form-control input-sm"
          type="text"
        />
      </div>
      <div class="col-2 py-2 border-right">
        <input
          v-model="model.time"
          class="form-control input-sm text-center"
          type="number"
        />
      </div>
      <div class="col-1">
        <div class="row">
          <button type="button" class="col-4 btn" @click="onCancel()">
            <i class="fa-solid fa-circle-xmark del-btn font-26" />
          </button>
          <button type="button" class="col-4 btn" @click="onSave()">
            <i class="fa-solid fa-circle-plus plus-btn font-26" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["on-save", "on-cancel"]);

const initModel = {
  us: null,
  task: null,
  title: null,
  time: null,
};

const model = ref({
  ...initModel,
});

function onSave() {
  emit("on-save", model.value);
  model.value = { ...initModel };
}

function onCancel() {
  emit("on-cancel");
  model.value = { ...initModel };
}
</script>

<style scoped>
input,
input:focus {
  background-color: var(--grey);
  color: var(--white);
  font-size: 18px;
  font-weight: bold;
}
</style>