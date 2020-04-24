<template>
  <div class="services">
    <h4 class="title text-right">Услуг</h4>
    <div class="services__list-wr">
      <ul class="services__list">
        <li class="services__item">
          <div class="services__item__inner">
            <span class="fill bg-green" style="width: 80%;" />
            <p>Ручное бронирование</p>
          </div>
          <span class="number"><b>{{ numHand }}</b></span>
        </li>
        <li class="services__item">
          <div class="services__item__inner">
            <span class="fill bg-blue-light" style="width: 13%;" />
            <p>Пакетные туры</p>
          </div>
          <span class="number"><b>{{ numPac }}</b></span>
        </li>
        <li class="services__item">
          <div class="services__item__inner">
            <span class="fill bg-blue-light" style="width: 5%;" />
            <p>Отели</p>
          </div>
          <span class="number"><b>{{ numHotel }}</b></span>
        </li>
      </ul>
    </div>

    <div class="services__total">
      <span><b>Всего</b></span>
      <span><b>{{ numHand + numPac + numHotel }}</b></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numHand: 11,
      numPac: 3,
      numHotel: 1
    }
  }
}
</script>
