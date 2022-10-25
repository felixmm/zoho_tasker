<template>
  <div class="row font-22 border-bottom">
    <div class="col-2 text-center py-2 border-right">
      <span class="blue-us fw-bold">{{ props.item.us }}</span>
    </div>
    <div class="col-2 text-center py-2 border-right">
      <span class="yellow-us">{{ props.item.task }}</span>
    </div>
    <div class="col-5 py-2 border-right">
      {{ props.item.title }}
    </div>
    <div class="col-2 text-center py-2 border-right">
      <span class="white fw-bold">{{ props.item.time }}</span>
    </div>
    <div class="col-1 py-2 text-center border-right">
      <button type="button" class="btn col-6" @click="onEdit">
        <i class="fa-solid fa-pen-to-square edit-btn font-26"></i>
      </button>
      <button type="button" class="btn col-6" @click="onDelete">
        <i class="fa-solid fa-circle-xmark del-btn font-26" />
      </button>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["on-edit", "on-delete"]);
const props = defineProps({
  item: {
    type: Object,
    default: () => ({
      us: 0,
      task: 0,
      title: "",
      time: 0,
    }),
  },
});

function onEdit() {
  emit("on-edit", props.item);
}

function onDelete() {
  emit("on-delete", props.item);
}
</script>

<style scoped>
</style>