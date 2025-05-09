  
  <script>
    export default {
        name: 'CheckList',
        props: {
        header: {
            type: String,
            default: ''
        },
        checklist: {
            type: Array,
            required: true
        }
        },
        components: {
            // placeholder for recursive self-registration
            Checklist: null
        },
        created() {
            // register self for recursion
            this.$options.components.Checklist = this.$options;
        }
    };
  </script>

<template>
    <div class="checklist">
      <!-- Optional section header -->
      <h3 v-if="header" class="checklist-header">{{ header }}</h3>
  
      <!-- List of items -->
      <ul class="ms-3">
        <li v-for="item in checklist" class="checklist-item">
          <!-- Checkbox + label -->
          <label class="checklist-label">
            <input type="checkbox" v-model="item.checked" />
            <span>{{ item.label }}</span>
          </label>
  
          <!-- Optional inline input -->
          <div v-if="item.input !== undefined" class="checklist-input">
            <label>
              <span class="input-label">{{ item.inputLabel }}</span>
              <input :type="item.inputType || 'text'" v-model="item.input" />
            </label>
          </div>
  
          <!-- Recurse for nested checklist -->
          <Checklist
            v-if="item.checklist"
            :header="item.header"
            :checklist="item.checklist"
          />
        </li>
      </ul>
    </div>
  </template>
