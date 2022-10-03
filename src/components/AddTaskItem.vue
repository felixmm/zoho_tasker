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
      <div class="col-6">
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
    </div>
    <div class="row algin-content-end">
      <button class="col-2">Cancel</button>
      <button class="col-2" @click="onSave()">Ok</button>
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
</script>