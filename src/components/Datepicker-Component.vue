<template>
  <div class="row">
    <div class="col-2 text-center p-4 border blue">
      <i class="fa-solid fa-angles-left datepicker-icon"></i>
    </div>
    <div class="col-8 text-center p-4 border">{{ date }}</div>
    <div class="col-2 text-center p-4 border blue">
      <i class="fa-solid fa-angles-right datepicker-icon"></i>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Datepicker-Component",
  setup() {
    const date = ref(new Date());

    return {
      date,
    };
  },
};
</script>

<style scoped>
.datepicker-icon {
  font-size: 40px;
}

.datepicker-icon:hover {
  cursor: pointer;
}

.datepicker-icon:active {
  color: var(--blue-light);
}
</style>