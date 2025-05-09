<script>
import Checklist from '@/components/Checklist/Checklist.vue'
import checklistService from '@/services/checklistService'
export default {
    components: {
        Checklist
    },
    data() {
        return {
            checklist: []
        }
    },
    async mounted() {
        this.checklist = await checklistService.getChecklist()
    }
}
</script>

<template>
  <main>
    <Checklist :checklist="checklist" />
  </main>
</template>
