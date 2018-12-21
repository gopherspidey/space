<template>
    <table class="table table-hover">
            <thead>
            <tr>
              <th>Qty</th>
              <th>Modifier</th>
              <th>SKU</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.SKU">
                    <td>{{ item.quantity }}</td>
                    <td>{{ item.modifier }}</td>
                    <td>{{ item.SKU }}</td>
                    <td>
                        <div class="btn-group" role="group" aria-label="SKU Actions">
                            <router-link :to="{name: 'edit', params: { id: item.SKU }}" class="btn btn-primary">Edit</router-link>
                            <button class="btn btn-danger">Delete</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
</template>

<script>
export default {
    props: ['items']
}
</script>

