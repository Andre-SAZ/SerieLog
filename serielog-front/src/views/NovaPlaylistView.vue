<script setup>
  import { useRouter } from "vue-router";

  const router = useRouter();

  async function salvar(produto) {
    await fetch("http://localhost:3000/series", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(produto),
    });

    router.push("/"); // redireciona após salvar
  }
</script>