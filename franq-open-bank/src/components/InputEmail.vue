<template>
  <div>
    <label :for="iputName" class="block text-gray-700 text-sm font-bold mb-2">{{
      labelName
    }}</label>
    <input
      :id="iputName"
      type="email"
      :value="props.modelValue"
      @input="updateValue"
      required
      :placeholder="placeHolder"
      class="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-400"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  labelName: {
    type: String,
    required: true
  },
  iputName: {
    type: String,
    required: true
  },
  modelValue: {
    type: String,
    required: true
  },
  placeHolder: {
    type: String
  }
})
const emit = defineEmits(['update:modelValue'])

const updateValue = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}

const labelName = ref(props.labelName)
const iputName = ref(props.iputName)
</script>
