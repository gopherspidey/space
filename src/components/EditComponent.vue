<template>
  <div>
    <h1>Edit</h1>
    <form @submit.prevent="updatePost">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>SKU:</label>
            <input type="text" class="form-control" v-model="SKU.SKUName">
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Description:</label>
              <textarea class="form-control" v-model="SKU.description" rows="5"></textarea>
            </div>
          </div>
        </div><br />
        <StackItems v-bind:items="SKU.items"></StackItems>
        <div class="form-group">
          <button class="btn btn-primary">Update</button>
        </div>
    </form>
  </div>
</template>

<script>
    import StackItems from './StackItems'
    export default {
        components: {
            StackItems
        },
      data() {
        return {
          SKU: {}
        }
      },
      created() {
        let uri = `http://localhost:4000/sku/edit/${this.$route.params.id}`;
        this.axios.get(uri).then((response) => {
            this.SKU = response.data;
        });
      },
      methods: {
        updatePost() {
          let uri = `http://localhost:4000/sku/update/${this.$route.params.id}`;
          this.axios.post(uri, this.SKU).then(() => {
            this.$router.push({name: 'posts'});
          });
        }
      }
    }
</script>