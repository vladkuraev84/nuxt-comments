<template>
  <div class="user">
    <div class="container">
      <div class="user__photo">
        <img src="~/assets/img/avatar.svg" alt="avatar" />
      </div>
      <div class="user__info">
        <h5 class="user__name"><strong>Вероника Ростова</strong></h5>
        <p class="user__position">Менеджер по продажам</p>
<!--        <p class="user__description">Подберу для вас самые лучшие предложения. Мои услуги абсолютно бесплатны</p>-->
        <p class="user__description">Подберу для вас самые лучшие предложения. Мои услуги абсолютно бесплатны</p>
        <services />
      </div>
    </div>
  </div>
</template>

<script>
  import services from './services'

  export default {
    components: {
      services
    },
  }
</script>
