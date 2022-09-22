<template>
  <div class="row">
    <div class="col-2 text-center p-4 border blue">
      <a href="#" @click="prevDay">
        <i class="fa-solid fa-angles-left datepicker-icon" />
      </a>
    </div>
    <div class="col-8 text-center p-4 border">
      {{ formatedDate }}
    </div>
    <div class="col-2 text-center p-4 border blue">
      <a href="#" @click="nextDay">
        <i class="fa-solid fa-angles-right datepicker-icon" />
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineEmits } from "vue";
import moment from "moment";

const emit = defineEmits(["on-date-change"]);

const date = ref(new Date());
const formatedDate = computed(() => moment(date.value).format("DD-MMM-YYYY"));

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