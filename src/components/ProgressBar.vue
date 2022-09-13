<template>
  <div class="progress-bar">
    <template v-for="item in 4">
      <div class="node">
        <div class="txt">{{ item }}</div>
      </div>
      <div class="line">
        <div class="core"></div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
}
</script>

<style scoped lang="scss">
.progress-bar {
  width: 530px;
  margin: auto;
  padding-top: 70px;
}
@media screen and (max-width: 768px) {
  .history-header {
    height: 250px;
  }
  .history-header h2 {
    padding-top: 72px;
    font-size: 24px;
  }
  .progress-bar {
    padding-top: 50px;
    transform: translate(-50%, -50%) scale(0.6, 0.6);
    position: absolute;
    left: 50%;
    top: 160px;
  }
  .progress-bar .node {
    transform: scale(1.5, 1.5);
  }
  .progress-bar .line {
    transform: scale(0.88, 0.88);
  }
}
.progress-bar .node {
  width: 24px;
  height: 24px;
  float: left;
  position: relative;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
}
.progress-bar .line {
  float: left;
  height: 2px;
  background: rgba(255, 255, 255, 0.5);
  width: 100px;
  margin-top: 11px;
}
.progress-bar .node .txt {
  position: absolute;
  font-size: 16px;
  top: -30px;
  width: 200px;
  text-align: center;
  left: 50%;
  margin-left: -100px;
}
.progress-bar .node .core {
  width: 18px;
  height: 18px;
  position: absolute;
  top: 3px;
  left: 3px;
  border-radius: 50%;
}
.progress-bar .node.active .core {
  background: #fff;
}
</style>
