<template>
  <vue-final-modal
    v-bind="$attrs"
    class="w-75 h-75 m-auto modal-wrap"
    :click-to-close="false"
  >
    <div class="position-sticky top-0 end-0 text-end">
      <button type="button" class="btn" @click="closeModal">
        <i class="fa-solid fa-circle-xmark del-btn font-26" />
      </button>
    </div>
    <div class="px-4">
      <div
        v-for="(message, index) in messages"
        :key="index"
        class="p-3 modal-text"
      >
        <div class="text-end">
          <button
            :id="'copy-clipboard-' + index"
            class="btn copy-clipboard-btn"
            @click="copyToClipboard(message.text, index)"
          >
            <i class="fa-regular fa-copy" />
            <label>Copy to Clipboard</label>
          </button>
        </div>
        <span v-if="message.us" class="bold blue-us" v-html="message.us" />
        <span v-html="message.text" />
        <span
          v-if="message.hours"
          class="bold yellow-us"
          v-html="message.hours"
        />
      </div>
    </div>
  </vue-final-modal>
</template>

<script>
export default {
  inheritAttrs: false,

  props: {
    messages: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  emits: ["on-close"],
  methods: {
    copyToClipboard(text, index) {
      const button = document.getElementById("copy-clipboard-" + index);
      button.children[1].innerHTML = "Copied!";
      setTimeout(() => {
        button.children[1].innerHTML = "Copy to Clipboard";
      }, 1200);

      const cleanText = text.replace(/(<([^>]+)>)/gi, "").trim();
      navigator.clipboard.writeText(cleanText);
    },
    closeModal() {
      this.$emit("on-close");
    },
  },
};
</script>

<style scoped>
.modal-wrap {
  height: 75%;
  overflow-y: scroll;
}

.modal-text {
  background-color: var(--bs-body-bg);
}
</style>