<template>
  <vue-final-modal
    v-bind="$attrs"
    class="w-75 h-50 m-auto modal-wrap"
    :click-to-close="false"
  >
    <div class="position-sticky top-0 end-0 text-end">
      <button type="button" class="btn" @click="closeModal">
        <i class="fa-solid fa-circle-xmark del-btn font-26" />
      </button>
    </div>
    <div class="px-4">
      <h3>Comment:</h3>
      <textarea v-model="text" rows="8" class="p-2 text-area" />
    </div>
    <div class="position-sticky bottom-0 end-0 text-end">
      <button type="button" class="btn" @click="addComment">
        <i class="fa-solid fa-circle-plus font-40 p-3 plus-btn" />
      </button>
    </div>
  </vue-final-modal>
</template>

<script>
export default {
  inheritAttrs: false,

  props: {
    comment: {
      type: String,
      default: "",
    },
  },

  emits: ["on-close", "on-add-comment"],
  data() {
    return {
      text: "",
    };
  },

  watch: {
    comment(newVal) {
      this.text = newVal;
    },
  },

  methods: {
    closeModal() {
      this.$emit("on-close");
    },
    addComment() {
      this.$emit("on-add-comment", this.text);
    },
  },
};
</script>

<style scoped>
.modal-wrap {
  height: 75%;
  overflow-y: scroll;
}

.text-area {
  width: 100%;
  background-color: var(--bs-body-bg);
  color: var(--bs-body-color);
}
</style>