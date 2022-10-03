<template>
  <div class="row">
    <div class="col-2 text-center p-4">
      <button type="button" class="btn" @click="prevDay">
        <i class="fa-solid fa-angles-left py-2 px-4 arrow-btn font-40" />
      </button>
    </div>
    <div class="col-8 text-center my-auto font-40">
      {{ formatedDate }}
    </div>
    <div class="col-2 text-center p-4">
      <button type="button" class="btn" @click="nextDay">
        <i class="fa-solid fa-angles-right py-2 px-4 arrow-btn font-40" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineEmits } from "vue";
import moment from "moment";

const emit = defineEmits(["on-date-change"]);

const date = ref(new Date());
const formatedDate = computed(() => moment(date.value).format("DD MMM, YYYY"));

const prevDay = () => {
  date.value = moment(date.value).subtract(1, "days").toDate();
  emit("on-date-change", date.value);
};

const nextDay = () => {
  date.value = moment(date.value).add(1, "days").toDate();
  emit("on-date-change", date.value);
};
</script>

<style scoped>
</style>