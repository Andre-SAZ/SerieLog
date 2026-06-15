<script setup>
  import { ref, onMounted } from "vue";
  import { useRoute } from "vue-router";

  const route = useRoute();
  const produto = ref(null);

  onMounted(async () => {
    const id = route.params.id;
    const res = await fetch(`https://api.exemplo.com/products/${id}`);
    produto.value = await res.json();
  });
</script>