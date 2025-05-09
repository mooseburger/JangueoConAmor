<script>
import ParticipantDashboard from '@/components/Participants/ParticipantDashboard.vue'
import checklistService from '@/services/checklistService'

export default {
    components: {
        ParticipantDashboard
    },
    methods: {
        async initializeChecklist() {
            await checklistService.initializeChecklist()
        }
    }
}
</script>

<template>
  <main>
    <button class="btn btn-primary" @click="initializeChecklist">Initialize Checklist</button>
    <ParticipantDashboard />
  </main>
</template>
