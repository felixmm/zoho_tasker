<template>
  <div>
    <div class="row form-group font-22 py-3 my-3 border">
      <div class="col-2">
        <label>US</label>
        <input v-model="model.us" class="form-control input-sm" type="number" />
      </div>
      <div class="col-2">
        <label>Task</label>
        <input
          v-model="model.task"
          class="form-control input-sm"
          type="number"
        />
      </div>
      <div class="col-5">
        <label>Title</label>
        <input
          v-model="model.title"
          class="form-control input-sm"
          type="text"
        />
      </div>
      <div class="col-2">
        <label>Time</label>
        <input
          v-model="model.time"
          class="form-control input-sm"
          type="number"
        />
      </div>
      <div class="col-1">
        <div class="row">
          <button type="button" class="col-12 btn" @click="onSave()">
            <i class="fa-solid fa-circle-plus plus-btn font-26" />
          </button>
          <button type="button" class="col-12 btn" @click="onCancel()">
            <i class="fa-solid fa-circle-xmark del-btn font-26" />
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
  model.value = { ...initModel };
  emit("on-save", model.value);
}

function onCancel() {
  model.value = { ...initModel };
  emit("on-cancel");
}
</script>