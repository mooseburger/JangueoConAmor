<script>

export default {
    props: {
        participants: Array
    }
}

</script>

<template>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="participant in participants">
                <td>{{ participant.FirstName }}</td>
                <td>{{ participant.LastName }}</td>
            </tr>
        </tbody>
    </table>
</template>

