<template>
  <div>
    <label :for="iputName" class="block text-gray-700 text-sm font-bold mb-2">{{
      labelName
    }}</label>
    <input
      :value="props.modelValue"
      @input="updateValue"
      @blur="updateValueBlur"
      :id="iputName"
      type="text"
      maxlength="40"
      :name="iputName"
      required
      class="w-full p-2 border rounded-lg border-gray-200 focus:outline-none focus:ring focus:ring-indigo-400"
      :placeholder="placeHolder"
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
  placeHolder: {
    type: String
  },
  iputName: {
    type: String,
    required: true
  },

  modelValue: {
    type: String,
    required: true
  }
})
const emit = defineEmits(['update:modelValue', 'blurEvent'])
const labelName = ref(props.labelName)
const iputName = ref(props.iputName)

const updateValue = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
const updateValueBlur = (e: Event) => {
  emit('blurEvent', (e.target as HTMLInputElement).value)
}
</script>
