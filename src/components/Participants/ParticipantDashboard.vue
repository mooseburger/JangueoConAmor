<script>

import { db } from '@/firebase'
import { collection, getDocs } from 'firebase/firestore/lite'
import ParticipantTable from '@/components/Participants/ParticipantTable.vue'

export default {
    components: {
        ParticipantTable
    },
    data() {
        return {
            participants: []
        }
    },
    methods: {
        async getParticipants() {
            const participants = await getDocs(collection(db, 'participants'))
            this.participants = participants.docs.map(doc => doc.data())
        }
    },
    mounted() {
        this.getParticipants()
    }
}
</script>

<template>
    <ParticipantTable :participants="participants" />
</template>