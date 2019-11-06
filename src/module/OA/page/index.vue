<template>
  <div id="index">
    <header-vue name="医疗传媒集团集团"></header-vue>
    <div class="container">
      <div class="banner"></div>
      <div class="backlog">
        <img src="../../../assets/images/backlog.png" alt="" />
        <i></i>
        <span>还有<span>7</span>个待办事项</span>
        <div class="arrow">
          <img src="../../../assets/images/arrow-right.png" alt="" />
        </div>
      </div>
      <div class="main">
        <div class="personnel">
          <h2><img src="../../../assets/images/personnel.png" alt="" /></h2>
          <ul>
            <li>
              <h3>休假</h3>
              <div>
                <div>
                  <div>
                    <img src="../../../assets/images/vacate-apply.png" alt="" />
                  </div>
                  <span>请假申请</span>
                </div>
                <div>
                  <div>
                    <img
                      src="../../../assets/images/vacate-approve.png"
                      alt=""
                    />
                  </div>
                  <span>请假审批</span>
                </div>
              </div>
            </li>
            <li>
              <h3>签到</h3>
              <div>
                <div>
                  <div>
                    <img src="../../../assets/images/sign-in.png" alt="" />
                  </div>
                  <span>签到打卡</span>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="finance">
          <h2><img src="../../../assets/images/finance.png" alt="" /></h2>
          <ul>
            <li>
              <h3>报销</h3>
              <div>
                <div>
                  <div>
                    <img
                      src="../../../assets/images/reimburse-apply.png"
                      alt=""
                    />
                  </div>
                  <span>报销申请</span>
                </div>
                <div>
                  <div>
                    <img
                      src="../../../assets/images/reimburse-approve.png"
                      alt=""
                    />
                  </div>
                  <span>报销审批</span>
                </div>
              </div>
            </li>
            <li>
              <h3>借款</h3>
              <div>
                <div>
                  <div>
                    <img src="../../../assets/images/borrow-apply.png" alt="" />
                  </div>
                  <span>借款申请</span>
                </div>
                <div>
                  <div>
                    <img
                      src="../../../assets/images/borrow-approve.png"
                      alt=""
                    />
                  </div>
                  <span>借款审批</span>
                </div>
              </div>
            </li>
            <li>
              <h3>固定资产</h3>
              <div>
                <div>
                  <div>
                    <img
                      src="../../../assets/images/property-apply.png"
                      alt=""
                    />
                  </div>
                  <span>固定资产申请</span>
                </div>
                <div>
                  <div>
                    <img
                      src="../../../assets/images/property-approve.png"
                      alt=""
                    />
                  </div>
                  <span>固定资产审批</span>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="erp">
          <h2><img src="../../../assets/images/ERP.png" alt="" /></h2>
          <ul>
            <li>
              <h3>用章</h3>
              <div>
                <div>
                  <div>
                    <img
                      src="../../../assets/images/chapter-apply.png"
                      alt=""
                    />
                  </div>
                  <span>用章申请</span>
                </div>
                <div>
                  <div>
                    <img
                      src="../../../assets/images/chapter-approve.png"
                      alt=""
                    />
                  </div>
                  <span>用章审批</span>
                </div>
              </div>
            </li>
            <li>
              <h3>盖章</h3>
              <div>
                <div>
                  <div>
                    <img src="../../../assets/images/stamp-apply.png" alt="" />
                  </div>
                  <span>盖章申请</span>
                </div>
                <div>
                  <div>
                    <img
                      src="../../../assets/images/stamp-approve.png"
                      alt=""
                    />
                  </div>
                  <span>盖章审批</span>
                </div>
              </div>
            </li>
            <li>
              <h3>公司资质出借</h3>
              <div>
                <div>
                  <div>
                    <img
                      src="../../../assets/images/qualification-apply.png"
                      alt=""
                    />
                  </div>
                  <span>公司资质出借申请</span>
                </div>
                <div>
                  <div>
                    <img
                      src="../../../assets/images/qualification-approve.png"
                      alt=""
                    />
                  </div>
                  <span>公司资质出借审批</span>
                </div>
              </div>
            </li>
            <li>
              <h3>付款</h3>
              <div>
                <div>
                  <div>
                    <img
                      src="../../../assets/images/payment-approve.png"
                      alt=""
                    />
                  </div>
                  <span>付款审批</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import headerVue from "../components/header/header.vue";

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
  @import "../../../../static/scss/_commonScss";
  #index {
    .container {
      .banner {
        display: flex;
        height: 155px;
        margin-top: 10px;
        margin-bottom: 13px;
        width: 100%;
        background: #03ccbb;
      }
      .backlog {
        height: 42px;
        width: 100%;
        display: flex;
        background: #f6f6f6;
        border-radius: 20px;
        align-items: center;
        margin-bottom: 28px;
        padding: 0 15px;
        position: relative;
        > img {
          height: 19px;
          margin-top: 2px;
        }
        i {
          background: #ccc;
          height: 13px;
          width: 1px;
          margin: 0 9px;
        }
        > span {
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: #222222;
          > span {
            color: #f10215;
            font-family: PingFangSC-Regular;
            font-size: 14px;
          }
        }
        .arrow {
          position: absolute;
          right: 11px;
          top: 11px;
          img {
            width: 18px;
          }
        }
      }
      .main {
        padding-top: 0.5px;
        h2 {
          height: 26px;
          margin-top: 10px;
          margin-bottom: 27px;
          font-family: FZZCHJW--GB1-0;
          font-size: 21px;
          color: #333333;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            height: 23px;
          }
        }
        ul {
          display: flex;
          justify-content: space-between;
          flex-direction: row;
          flex-wrap: wrap;
          > li {
            width: 170px;
            margin-bottom: 28px;
            h3 {
              font-family: PingFangSC-Medium;
              font-size: 15px;
              color: #222222;
              height: 21px;
              display: flex;
              align-items: center;
              margin-bottom: 10px;
              margin-left: 10px;
            }
            > div {
              min-height: 106px;
              opacity: 0.75;
              background: #fffaf5;
              display: flex;
              align-items: center;
              padding: 18px 20px 16px;
              justify-content: space-between;
              > div {
                > div {
                  height: 48px;
                  width: 52px;
                  //background: #f4463e;
                  display: flex;
                  justify-content: center;
                  flex-direction: column;
                  align-items: center;
                  img {
                    height: 100%;
                    width: 48px;
                  }
                }
                span {
                  font-family: PingFangHK-Regular;
                  font-size: 13px;
                  color: #222222;
                  display: flex;
                  width: 52px;
                  justify-content: center;
                  text-align: center;
                  line-height: 18px;
                  margin-top: 6px;
                }
              }
            }
          }
        }
        & > .personnel {
          ul {
            li {
              &:nth-child(2) {
                > div {
                  opacity: 0.71;
                  background: rgba(255, 249, 227, 0.6);
                }
              }
            }
          }
        }
        & > .finance,
        & > .erp {
          ul {
            li {
              &:nth-child(1) {
                > div {
                  opacity: 0.75;
                  background: #f6fcff;
                }
              }
              &:nth-child(2) {
                > div {
                  opacity: 0.71;
                  background: #f5fffb;
                }
              }
              &:nth-child(3) {
                > div {
                  opacity: 0.75;
                  background: rgba(255, 246, 246, 0.64);
                }
              }
            }
          }
        }
      }
    }
  }
</style>