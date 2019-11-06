<template>
  <div id="reimburse-apply">
    <header-vue name="报销申请"></header-vue>
    <div class="container">
      <h2>请选择报销类型</h2>
      <ul>
        <li>
          <div>
            <span>日常费用报销</span>
            <p>
              申请
              <img src="../../../../assets/images/arrow-right.png" alt="" />
            </p>
          </div>
          <span>2019年你已报销日常费用3次，累计45.50元</span>
        </li>
        <li>
          <div>
            <span>项目差旅报销</span>
            <p>
              申请
              <img src="../../../../assets/images/arrow-right.png" alt="" />
            </p>
          </div>
          <span>2019年你已报销日常费用3次，累计45.50元</span>
        </li>
        <li>
          <div>
            <span>派工费用报销</span>
            <p>
              申请
              <img src="../../../../assets/images/arrow-right.png" alt="" />
            </p>
          </div>
          <span>2019年你已报销日常费用3次，累计45.50元</span>
        </li>
      </ul>
    </div>
    <ul class="footer"></ul>
  </div>
</template>

<script>
  import headerVue from "../../components/header/header.vue";

  export default {
    data() {
      return {};
    },
    components: {
      headerVue
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../../../../static/scss/_commonScss";
  #reimburse-apply {
    .container {
      background: $base-backgroud;
      padding: 0;
      > h2 {
        height: 49px;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #666666;
        display: flex;

        align-items: center;
        padding-left: 13px;
      }
      > ul {
        display: flex;
        flex-direction: column;
        li {
          display: flex;
          flex-direction: column;
          width: 100%;

          > div {
            height: 55px;
            width: 100%;
            background: #fff;
            display: flex;
            font-weight: 600;
            align-items: center;
            padding: 0 13px;
            justify-content: space-between;
            > span {
              font-weight: 600;
            }
            > p {
              font-family: PingFangSC-Regular;
              font-size: 14px;
              color: #aaaaaa;
              display: flex;
              align-items: center;
              line-height: 20px;
              img {
                height: 19px;
                margin-left: 6px;
              }
            }
          }
          > span {
            display: flex;
            padding-left: 13px;
            margin: 8px 0 14px;
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #999999;
            line-height: 17px;
            align-items: center;
          }
        }
      }
    }
  }
</style>