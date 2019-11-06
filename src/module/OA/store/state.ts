interface StateType {
  count : Number,
  states : String,
  API_HOST : Object,
  page : Object,
  userType : String,
  userCompanyIdOrHospitalId : String
}

// 下面是在state中定义的数据，尽量使用变量声明

let state : StateType = {
  count: 1,
  states: "turn-on", //控制路由返回
  API_HOST: process.env.API_HOST,
  userType: "",
  userCompanyIdOrHospitalId: "",
  page: {
    detailsPageData: {},
    typeOfEnterprise: {},
    mainBusiness: [],
    uploadProduct: {
      SBTG: {
        productLine: [
          {
            aliasId: "",
            aliasName: "",
            productLineId: "",
            productLineName: ""
          }
        ],
        productLineId: "",
        productLineName: "",
        brand: [
          {
            aliasId: "",
            aliasName: "",
            brandId: "",
            brandLabel: "",
            brandName: ""
          }
        ],
        brandId: "",
        brandName: "",
        model: [],
        modelName: "",
        params: [],
        mainParamsName: "",
        application: "",
        price: "",
        isOpen: false
      },
      HCTG: {
        productLine: [
          {
            aliasId: "",
            aliasName: "",
            productLineId: "",
            productLineName: ""
          }
        ],
        productLineId: "",
        productLineName: "",
        brand: [
          {
            aliasId: "",
            aliasName: "",
            brandId: "",
            brandLabel: "",
            brandName: ""
          }
        ],
        brandId: "",
        brandName: "",
        model: [],
        modelName: "",
        params: [],
        mainParamsName: "",
        application: "",
        price: "",
        isOpen: false
      },
      SHTG: {
        productLine: [
          {
            aliasId: "",
            aliasName: "",
            productLineId: "",
            productLineName: ""
          }
        ],
        productLineId: "",
        productLineName: "",
        brand: [
          {
            aliasId: "",
            aliasName: "",
            brandId: "",
            brandLabel: "",
            brandName: ""
          }
        ],
        brandId: "",
        brandName: "",
        model: [],
        modelName: "",
        params: [],
        mainParamsName: "",
        application: "",
        price: "",
        isOpen: false,
        responseTime: "",
        maintenanceType: ""
      },
      XXHTG: {
        productLine: [
          {
            aliasId: "",
            aliasName: "",
            productLineId: "",
            productLineName: ""
          }
        ],
        productLineId: "",
        productLineName: "",
        brand: [
          {
            aliasId: "",
            aliasName: "",
            brandId: "",
            brandLabel: "",
            brandName: ""
          }
        ],
        brandId: "",
        brandName: "",
        model: [],
        modelName: "",
        params: [],
        mainParamsName: "",
        application: "",
        price: "",
        isOpen: false
      },
      JRTG: {
        productLine: [
          {
            aliasId: "",
            aliasName: "",
            productLineId: "",
            productLineName: ""
          }
        ],
        productLineId: "",
        productLineName: "",
        brand: [
          {
            aliasId: "",
            aliasName: "",
            brandId: "",
            brandLabel: "",
            brandName: ""
          }
        ],
        brandId: "",
        brandName: "",
        model: [],
        modelName: "",
        params: [],
        mainParamsName: "",
        application: "",
        price: "",
        isOpen: false
      },
      ZXTG: {
        productLine: [
          {
            aliasId: "",
            aliasName: "",
            productLineId: "",
            productLineName: ""
          }
        ],
        productLineId: "",
        productLineName: "",
        brand: [
          {
            aliasId: "",
            aliasName: "",
            brandId: "",
            brandLabel: "",
            brandName: ""
          }
        ],
        brandId: "",
        brandName: "",
        model: [],
        modelName: "",
        params: [],
        mainParamsName: "",
        application: "",
        price: "",
        isOpen: false
      }
    },
    submitGroupDemand: {
      SBTG: {
        productLine: [
          {
            aliasId: "",
            aliasName: "",
            productLineId: "",
            productLineName: ""
          }
        ],
        productLineId: "",
        aliasProductLineId: "",
        productLineName: "",
        brandFirst: [
          {
            aliasId: "",
            aliasName: "",
            brandId: "",
            brandLabel: "",
            brandName: ""
          }
        ],
        brandFirstId: "",
        brandFirstName: "",
        brandSecond: [
          {
            aliasId: "",
            aliasName: "",
            brandId: "",
            brandLabel: "",
            brandName: ""
          }
        ],
        brandSecondId: "",
        brandSecondName: "",
        brandThird: [
          {
            aliasId: "",
            aliasName: "",
            brandId: "",
            brandLabel: "",
            brandName: ""
          }
        ],
        brandThirdId: "",
        brandThirdName: "",
        modelFirst: [],
        modelSecond: [],
        modelThird: [],
        modelFirstName: "",
        modelSecondName: "",
        modelThirdName: "",
        params: [],
        mainParamsName: "",
        loadTime: {
          outTime: "",
          year: "",
          quarter: "",
          flag: ""
        },
        showLoadTime: "",
        demandNum: "",
        histroyTotalDemandNum: "",
        totalPrice: "",
        num: 1, //需求数量
        price: "", //采购价格
        application: "", //应用需求
        introduce: "" //采购需求说明
      },
      HCTG: {
        productLine: [
          {
            aliasId: "",
            aliasName: "",
            productLineId: "",
            productLineName: ""
          }
        ],
        productLineId: "",
        aliasProductLineId: "",
        productLineName: "",
        brandFirst: [
          {
            aliasId: "",
            aliasName: "",
            brandId: "",
            brandLabel: "",
            brandName: ""
          }
        ],
        brandFirstId: "",
        brandFirstName: "",
        brandSecond: [
          {
            aliasId: "",
            aliasName: "",
            brandId: "",
            brandLabel: "",
            brandName: ""
          }
        ],
        brandSecondId: "",
        brandSecondName: "",
        brandThird: [
          {
            aliasId: "",
            aliasName: "",
            brandId: "",
            brandLabel: "",
            brandName: ""
          }
        ],
        brandThirdId: "",
        brandThirdName: "",
        modelFirst: [],
        modelSecond: [],
        modelThird: [],
        modelFirstName: "",
        modelSecondName: "",
        modelThirdName: "",
        params: [],
        mainParamsName: "",
        loadTime: {
          outTime: "",
          year: "",
          quarter: "",
          flag: ""
        },
        showLoadTime: "",
        demandNum: "",
        histroyTotalDemandNum: "",
        totalPrice: "",
        num: 1, //需求数量
        price: "", //采购价格
        application: "", //应用需求
        introduce: "" //采购需求说明
      },
      SHTG: {
        productLine: [
          {
            aliasId: "",
            aliasName: "",
            productLineId: "",
            productLineName: ""
          }
        ],
        productLineId: "",
        aliasProductLineId: "",
        productLineName: "",
        brand: [
          {
            aliasId: "",
            aliasName: "",
            brandId: "",
            brandLabel: "",
            brandName: ""
          }
        ],
        brandId: "",
        brandName: "",
        model: [],
        modelName: "",
        params: [],
        mainParamsName: "",
        loadTime: {
          outTime: "",
          year: "",
          quarter: "",
          flag: ""
        },
        showLoadTime: "",
        demandNum: "",
        histroyTotalDemandNum: "",
        totalPrice: "",
        installTime: "请选择安装日期", //安装日期
        deviceCheckNum: "", //每天检查量
        responseTime: "", //响应时间
        maintenanceType: "", //维保类型
        num: 1, //设备台数
        price: "", //维修预算
        introduce: "" //备注说明
      },
      XXHTG: {
        productLine: [
          {
            aliasId: "",
            aliasName: "",
            productLineId: "",
            productLineName: ""
          }
        ],
        productLineId: "",
        aliasProductLineId: "",
        productLineName: "",
        brand: [
          {
            aliasId: "",
            aliasName: "",
            brandId: "",
            brandLabel: "",
            brandName: ""
          }
        ],
        brandId: "",
        brandName: "",
        model: [],
        modelName: "",
        params: [],
        mainParamsName: "",
        loadTime: {
          outTime: "",
          year: "",
          quarter: "",
          flag: ""
        },
        showLoadTime: "",
        demandNum: "",
        histroyTotalDemandNum: "",
        totalPrice: "",
        num: 1, //
        price: "", //
        application: "", //应用需求
        introduce: "" //采购需求说明
      },
      JRTG: {
        productLine: [
          {
            aliasId: "",
            aliasName: "",
            productLineId: "",
            productLineName: ""
          }
        ],
        productLineId: "",
        aliasProductLineId: "",
        productLineName: "",
        brand: [
          {
            aliasId: "",
            aliasName: "",
            brandId: "",
            brandLabel: "",
            brandName: ""
          }
        ],
        brandId: "",
        brandName: "",
        model: [],
        params: [],
        mainParamsName: "",
        loadTime: {
          outTime: "",
          year: "",
          quarter: "",
          flag: ""
        },
        showLoadTime: "",
        demandNum: "",
        totalPrice: "",
        price: "", //
        application: "", //应用需求
        introduce: "" //采购需求说明
      },
      ZXTG: {
        productLine: [
          {
            aliasId: "",
            aliasName: "",
            productLineId: "",
            productLineName: ""
          }
        ],
        productLineId: "",
        aliasProductLineId: "",
        productLineName: "",
        brand: [
          {
            aliasId: "",
            aliasName: "",
            brandId: "",
            brandLabel: "",
            brandName: ""
          }
        ],
        brandId: "",
        brandName: "",
        model: [],
        params: [],
        mainParamsName: "",
        loadTime: {
          outTime: "",
          year: "",
          quarter: "",
          flag: ""
        },
        showLoadTime: "",
        demandNum: "",
        histroyTotalDemandNum: "",
        totalPrice: "",
        num: 1, //
        price: "", //
        application: "", //应用需求
        introduce: "" //采购需求说明
      }
    }
  }
};
export default state
