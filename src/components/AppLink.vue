<template>
  <div class="portal-app-link-area">
    <ul class="portal-app-link-list">
      <li>
        <img src="../assets/1515.png" />
        <img src="../assets/2828.png" />
        <img src="../assets/3535.png" />
        <img src="../assets/33.png" />
      </li>
      <li>
        <img src="../assets/5555.png" />
        <img src="../assets/6363.png" />
        <img src="../assets/8686.png" />
        <img src="../assets/9797.png" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppLink',
}
</script>

<style lang="scss" scoped>
.portal-app-link-list {
  list-style: none;
  li {
    img {
      padding: 1.5% 5%;
      width: 10%;
    }
  }
}
</style>
