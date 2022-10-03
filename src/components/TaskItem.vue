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
    <div class="col-1 py-2 text-center">
      <button type="button" class="btn" @click="onDelete()">
        <i class="fa-solid fa-circle-xmark del-btn font-30" />
      </button>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["on-delete"]);
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

function onDelete() {
  emit("on-delete", props.item);
}
</script>

<style scoped>
.border-right {
  border-right: 2px solid;
}
</style>