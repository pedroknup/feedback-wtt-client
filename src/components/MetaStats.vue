<template>
  <div class="wrapper-meta">
    <span class="title"> Target </span>
    <div v-if="$meta" class="macros">
      <span class="calories macro-value">
        {{ $meta.calories }} <span class="measure kcal">kcal</span>
      </span>
      <div class="macro">
        <span class="macro-title">Proteins (g)</span>
        <span class="macro-value">{{ $meta.proteins }} </span>
      </div>
      <div class="macro">
        <span class="macro-title">Carbs (g)</span>
        <span class="macro-value">{{ $meta.carbs }} </span>
      </div>
      <div class="macro">
        <span class="macro-title">Fat (g)</span>
        <span class="macro-value">{{ $meta.fat }} </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MetaStats',
  components: {}
}
</script>

<style lang="scss" scoped>
.wrapper-meta {
  margin: -8px auto 16px auto;
  position: relative;
  border: 1px solid #ccc;
  width: 346px;
  padding: 24px 0 16px 0;
  border-radius: 8px;
}

.name-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.title {
  position: absolute;
  top: -6px;
  left: 50%;
  text-transform: uppercase;
  padding: 0 8px;
  color: #999;
  font-size: 14px;
  transform: translateX(-50%);
  background-color: #efeeed;
}

.name {
  font-size: 18px;
  font-weight: bold;
  vertical-align: middle;
  margin-left: 10px;
  text-transform: capitalize;
}

.measure {
  font-size: 12px;
  font-weight: normal;
  vertical-align: middle;
  margin-left: -2px;

  &.kcal {
    vertical-align: unset;
  }
}

.macros {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  margin: auto;
}

.macro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  &-title {
    font-size: 10px;
    font-weight: bold;
    color: #828282;
    margin-bottom: 2px;
  }
  &-value {
    font-size: 20px;
    .measure {
      margin-left: 0;
    }
  }
}
</style>
