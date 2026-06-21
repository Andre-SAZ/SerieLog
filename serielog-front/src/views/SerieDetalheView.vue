<script setup>
  import { ref, onMounted } from "vue";
  import { useRoute } from "vue-router";

  const route = useRoute();
  const produto = ref(null);

  onMounted(async () => {
    const id = route.params.id;
    const res = await fetch(`http://localhost:3000/series/${id}`);
    produto.value = await res.json();
  });
</script>