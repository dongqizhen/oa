<template>
  <div id="backlog">
    <header-vue name="待办事项"></header-vue>
    <ul class="search">
      <li><span></span>搜索</li>
      <li><span></span>筛选</li>
    </ul>
    <div class="container">
      <ul>
        <li>
          <h2>徐国庆 提交的请假审批</h2>
          <ul>
            <li><span>开始时间</span>2019-08-13 09:30</li>
            <li><span>结束时间</span>2019-08-13 09:30</li>
          </ul>
          <span>事假</span>
        </li>
      </ul>
    </div>
    <ul class="footer">
      <li class="active"><span></span>待我审批</li>
      <li><span></span>我已审批</li>
    </ul>
  </div>
</template>

<script>
  import headerVue from "../components/header/header.vue";

  export default {
    data() {
      return {};
    },
    components: { headerVue }
  };
</script>

<style lang="scss" scoped>
  @import "../../../../static/scss/_commonScss.scss";
  #backlog {
    .search {
      height: 44px;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-family: PingFangSC-Regular;
      font-size: 15px;
      color: #666666;
      li {
        display: flex;
        flex: 1;
        justify-content: center;
      }
    }
    .container {
      background: $base-backgroud;
      > ul {
        display: flex;
        padding-top: 13px;
        > li {
          @include box_shadow_style;
          position: relative;
          display: flex;
          width: 100%;
          flex-direction: column;
          padding: 47px 13px 15px;
          & > span {
            // transform: scaleX(-1);
            background: #59a8c7;
            border-radius: 12px 0 11px 0;
            position: absolute;
            top: 0;
            width: 54px;
            height: 28px;
            left: 0;
            font-family: PingFangSC-Medium;
            font-size: 14px;
            color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          > h2 {
            font-family: PingFangSC-Medium;
            font-size: 17px;
            color: #222222;
            font-weight: 600;
            line-height: 24px;
            display: flex;
            align-items: center;
            margin-bottom: 15px;
          }
          > ul {
            li {
              display: flex;
              font-family: PingFangSC-Regular;
              font-size: 14px;
              color: #222222;
              align-items: center;
              > span {
                display: flex;
                width: 76px;
                font-family: PingFangSC-Light;
                font-size: 14px;
                color: #666666;
                line-height: 20px;
                margin-bottom: 2px;
              }
            }
          }
        }
      }
    }
    .footer {
      height: 50px;
      display: flex;
      align-items: center;
      box-shadow: $base-box-shadow;
      li {
        flex: 1;
        display: flex;
        justify-content: center;
        font-family: PingFangSC-Regular;
        font-size: 16px;
        height: 20px;
        align-items: center;
        color: #333333;
        &:first-child {
          border-right: 1px solid #cccccc;
        }
        &.active {
          color: #f10215;
        }
      }
    }
  }
</style>