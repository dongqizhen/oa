const mutations = {
  setName(state, name) {
    state.count = name
  },
  setTransition(state, states) {
    state.states = states;
  },
  setUserType(state, type) {
    state.userType = type;
  },
  setUserCompanyIdOrHospitalId(state, companyIdOrHospitalId) {
    state.userCompanyIdOrHospitalId = companyIdOrHospitalId;
  },
  setDetailsPageData(state, val) {
    state.page.detailsPageData = val;
  },
  selectCompanyType(state, companyValue) {
    state.page.typeOfEnterprise = companyValue;
  },
  selectMainBusiness(state, businessValue) {
    state.page.mainBusiness = businessValue;
  },
  uploadProductSBTG(state, SBTGValue) {
    console.log(SBTGValue);
    state.page.uploadProduct.SBTG = SBTGValue;
  },
  uploadProductHCTG(state, HCTGValue) {
    state.page.uploadProduct.HCTG = HCTGValue;
  },
  uploadProductSHTG(state, SHTGValue) {
    state.page.uploadProduct.SHTG = SHTGValue;
  },
  uploadProductXXHTG(state, XXHTGValue) {
    state.page.uploadProduct.XXHTG = XXHTGValue;
  },
  uploadProductJRTG(state, JRTGValue) {
    state.page.uploadProduct.JRTG = JRTGValue;
  },
  uploadProductZXTG(state, ZXTGValue) {
    state.page.uploadProduct.ZXTG = ZXTGValue;
  },
  selectSBTGProductSort(state, productSortValue) {
    state.page.uploadProduct.SBTG.productLine = productSortValue;
  },
  selectHCTGProductSort(state, productSortValue) {
    state.page.uploadProduct.HCTG.productLine = productSortValue;
  },
  selectSHTGProductSort(state, productSortValue) {
    state.page.uploadProduct.SHTG.productLine = productSortValue;
  },
  selectXXHTGProductSort(state, productSortValue) {
    state.page.uploadProduct.XXHTG.productLine = productSortValue;
  },
  selectJRTGProductSort(state, productSortValue) {
    state.page.uploadProduct.JRTG.productLine = productSortValue;
  },
  selectZXTGProductSort(state, productSortValue) {
    state.page.uploadProduct.ZXTG.productLine = productSortValue;
  },
  selectSBTGProductBrand(state, productBrandValue) {
    state.page.uploadProduct.SBTG.brand = productBrandValue;
  },
  selectHCTGProductBrand(state, productBrandValue) {
    state.page.uploadProduct.HCTG.brand = productBrandValue;
  },
  selectSHTGProductBrand(state, productBrandValue) {
    state.page.uploadProduct.SHTG.brand = productBrandValue;
  },
  selectXXHTGProductBrand(state, productBrandValue) {
    state.page.uploadProduct.XXHTG.brand = productBrandValue;
  },
  selectJRTGProductBrand(state, productBrandValue) {
    state.page.uploadProduct.JRTG.brand = productBrandValue;
  },
  selectZXTGProductBrand(state, productBrandValue) {
    state.page.uploadProduct.ZXTG.brand = productBrandValue;
  },
  selectSBTGProductModel(state, productModelValue) {
    state.page.uploadProduct.SBTG.model = productModelValue;
  },
  selectHCTGProductModel(state, productModelValue) {
    state.page.uploadProduct.HCTG.model = productModelValue;
  },
  selectSHTGProductModel(state, productModelValue) {
    state.page.uploadProduct.SHTG.model = productModelValue;
  },
  selectXXHTGProductModel(state, productModelValue) {
    state.page.uploadProduct.XXHTG.model = productModelValue;
  },
  selectJRTGProductModel(state, productModelValue) {
    state.page.uploadProduct.JRTG.model = productModelValue;
  },
  selectZXTGProductModel(state, productModelValue) {
    state.page.uploadProduct.ZXTG.model = productModelValue;
  },
  selectSBTGMainParam(state, mainParamValue) {
    state.page.uploadProduct.SBTG.params = mainParamValue;
  },
  selectHCTGMainParam(state, mainParamValue) {
    state.page.uploadProduct.HCTG.params = mainParamValue;
  },
  selectSHTGMainParam(state, mainParamValue) {
    state.page.uploadProduct.SHTG.params = mainParamValue;
  },
  selectXXHTGMainParam(state, mainParamValue) {
    state.page.uploadProduct.XXHTG.params = mainParamValue;
  },
  selectJRTGMainParam(state, mainParamValue) {
    state.page.uploadProduct.JRTG.params = mainParamValue;
  },
  selectZXTGMainParam(state, mainParamValue) {
    state.page.uploadProduct.ZXTG.params = mainParamValue;
  },
  uploadProductSBTGPriceSave(state, val) {
    state.page.uploadProduct.SBTG.price = val;
  },
  uploadProductSBTGPriceIsOpenSave(state, val) {
    state.page.uploadProduct.SBTG.isOpen = val;
  },
  uploadProductSBTGApplicationSave(state, val) {
    state.page.uploadProduct.SBTG.application = val;
  },
  uploadProductHCTGPriceSave(state, val) {
    state.page.uploadProduct.HCTG.price = val;
  },
  uploadProductHCTGPriceIsOpenSave(state, val) {
    state.page.uploadProduct.HCTG.isOpen = val;
  },
  uploadProductHCTGApplicationSave(state, val) {
    state.page.uploadProduct.HCTG.application = val;
  },
  uploadProductSHTGPriceSave(state, val) {
    state.page.uploadProduct.SHTG.price = val;
  },
  uploadProductSHTGPriceIsOpenSave(state, val) {
    state.page.uploadProduct.SHTG.isOpen = val;
  },
  uploadProductSHTGResponseTimeSave(state, val) {
    state.page.uploadProduct.SHTG.responseTime = val;
  },
  uploadProductSHTGMaintenanceTypeSave(state, val) {
    state.page.uploadProduct.SHTG.maintenanceType = val;
  },
  uploadProductXXHTGPriceSave(state, val) {
    state.page.uploadProduct.XXHTG.price = val;
  },
  uploadProductXXHTGPriceIsOpenSave(state, val) {
    state.page.uploadProduct.XXHTG.isOpen = val;
  },
  uploadProductXXHTGApplicationSave(state, val) {
    state.page.uploadProduct.XXHTG.application = val;
  },
  uploadProductJRTGPriceSave(state, val) {
    state.page.uploadProduct.JRTG.price = val;
  },
  uploadProductJRTGPriceIsOpenSave(state, val) {
    state.page.uploadProduct.JRTG.isOpen = val;
  },
  uploadProductJRTGApplicationSave(state, val) {
    state.page.uploadProduct.JRTG.application = val;
  },
  uploadProductZXTGPriceSave(state, val) {
    state.page.uploadProduct.ZXTG.price = val;
  },
  uploadProductZXTGPriceIsOpenSave(state, val) {
    state.page.uploadProduct.ZXTG.isOpen = val;
  },
  uploadProductZXTGApplicationSave(state, val) {
    state.page.uploadProduct.ZXTG.application = val;
  },
  SBTG(state, SBTGValue) {
    state.page.submitGroupDemand.SBTG = SBTGValue;
  },
  HCTG(state, HCTGValue) {
    state.page.submitGroupDemand.HCTG = HCTGValue;
  },
  SHTG(state, SHTGValue) {
    state.page.submitGroupDemand.SHTG = SHTGValue;
  },
  XXHTG(state, SHTGValue) {
    state.page.submitGroupDemand.XXHTG = SHTGValue;
  },
  JRTG(state, JRTGValue) {
    state.page.submitGroupDemand.JRTG = JRTGValue;
  },
  ZXTG(state, ZXTGValue) {
    state.page.submitGroupDemand.ZXTG = ZXTGValue;
  },
  SBTGProductSort(state, productSortValue) {
    state.page.submitGroupDemand.SBTG.productLine = productSortValue;
  },
  HCTGProductSort(state, productSortValue) {
    state.page.submitGroupDemand.HCTG.productLine = productSortValue;
  },
  SHTGProductSort(state, productSortValue) {
    state.page.submitGroupDemand.SHTG.productLine = productSortValue;
  },
  XXHTGProductSort(state, productSortValue) {
    state.page.submitGroupDemand.XXHTG.productLine = productSortValue;
  },
  JRTGProductSort(state, productSortValue) {
    state.page.submitGroupDemand.JRTG.productLine = productSortValue;
  },
  ZXTGProductSort(state, productSortValue) {
    state.page.submitGroupDemand.ZXTG.productLine = productSortValue;
  },
  SBTGProductBrandFirst(state, productBrandValue) {
    state.page.submitGroupDemand.SBTG.brandFirst = productBrandValue;
  },
  SBTGProductBrandSecond(state, productBrandValue) {
    state.page.submitGroupDemand.SBTG.brandSecond = productBrandValue;
  },
  SBTGProductBrandThird(state, productBrandValue) {
    state.page.submitGroupDemand.SBTG.brandThird = productBrandValue;
  },
  HCTGProductBrandFirst(state, productBrandValue) {
    state.page.submitGroupDemand.HCTG.brandFirst = productBrandValue;
  },
  HCTGProductBrandSecond(state, productBrandValue) {
    state.page.submitGroupDemand.HCTG.brandSecond = productBrandValue;
  },
  HCTGProductBrandThird(state, productBrandValue) {
    state.page.submitGroupDemand.HCTG.brandThird = productBrandValue;
  },
  SHTGProductBrand(state, brandValue) {
    state.page.submitGroupDemand.SHTG.brand = brandValue;
  },
  XXHTGProductBrand(state, productBrandValue) {
    state.page.submitGroupDemand.XXHTG.brand = productBrandValue;
  },
  JRTGProductBrand(state, productBrandValue) {
    state.page.submitGroupDemand.JRTG.brand = productBrandValue;
  },
  ZXTGProductBrand(state, productBrandValue) {
    state.page.submitGroupDemand.ZXTG.brand = productBrandValue;
  },
  SBTGProductModelFirst(state, productModelValue) {
    state.page.submitGroupDemand.SBTG.modelFirst = productModelValue;
  },
  SBTGProductModelSecond(state, productModelValue) {
    state.page.submitGroupDemand.SBTG.modelSecond = productModelValue;
  },
  SBTGProductModelThird(state, productModelValue) {
    state.page.submitGroupDemand.SBTG.modelThird = productModelValue;
  },
  HCTGProductModelFirst(state, productModelValue) {
    state.page.submitGroupDemand.HCTG.modelFirst = productModelValue;
  },
  HCTGProductModelSecond(state, productModelValue) {
    state.page.submitGroupDemand.HCTG.modelSecond = productModelValue;
  },
  HCTGProductModelThird(state, productModelValue) {
    state.page.submitGroupDemand.HCTG.modelThird = productModelValue;
  },
  SHTGProductModel(state, modelValue) {
    state.page.submitGroupDemand.SHTG.model = modelValue;
  },
  XXHTGProductModel(state, modelValue) {
    state.page.submitGroupDemand.XXHTG.model = modelValue;
  },
  SBTGMainParam(state, mainParamValue) {
    state.page.submitGroupDemand.SBTG.params = mainParamValue;
  },
  HCTGMainParam(state, mainParamValue) {
    state.page.submitGroupDemand.HCTG.params = mainParamValue;
  },
  XXHTGMainParam(state, mainParamValue) {
    state.page.submitGroupDemand.XXHTG.params = mainParamValue;
  },
  JRTGMainParam(state, mainParamValue) {
    state.page.submitGroupDemand.JRTG.params = mainParamValue;
  },
  ZXTGMainParam(state, mainParamValue) {
    state.page.submitGroupDemand.ZXTG.params = mainParamValue;
  },
  SBTGPredictTime(state, predictTimeValue) {
    state.page.submitGroupDemand.SBTG.loadTime = predictTimeValue;
  },
  HCTGPredictTime(state, predictTimeValue) {
    state.page.submitGroupDemand.HCTG.loadTime = predictTimeValue;
  },
  SHTGPredictTime(state, predictTimeValue) {
    state.page.submitGroupDemand.SHTG.loadTime = predictTimeValue;
  },
  XXHTGPredictTime(state, predictTimeValue) {
    state.page.submitGroupDemand.XXHTG.loadTime = predictTimeValue;
  },
  JRTGPredictTime(state, predictTimeValue) {
    state.page.submitGroupDemand.JRTG.loadTime = predictTimeValue;
  },
  ZXTGPredictTime(state, predictTimeValue) {
    state.page.submitGroupDemand.ZXTG.loadTime = predictTimeValue;
  },
  SBTGNumSave(state, val) {
    state.page.submitGroupDemand.SBTG.num = val;
  },
  SBTGPriceSave(state, val) {
    state.page.submitGroupDemand.SBTG.price = val;
  },
  SBTGApplicationSave(state, val) {
    state.page.submitGroupDemand.SBTG.application = val;
  },
  SBTGIntroduceSave(state, val) {
    state.page.submitGroupDemand.SBTG.introduce = val;
  },
  HCTGNumSave(state, val) {
    state.page.submitGroupDemand.HCTG.num = val;
  },
  HCTGPriceSave(state, val) {
    state.page.submitGroupDemand.HCTG.price = val;
  },
  HCTGApplicationSave(state, val) {
    state.page.submitGroupDemand.HCTG.application = val;
  },
  HCTGIntroduceSave(state, val) {
    state.page.submitGroupDemand.HCTG.introduce = val;
  },
  SHTGNumSave(state, val) {
    state.page.submitGroupDemand.SHTG.num = val;
  },
  SHTGPriceSave(state, val) {
    state.page.submitGroupDemand.SHTG.price = val;
  },
  SHTGInstallTimeSave(state, val) {
    state.page.submitGroupDemand.SHTG.installTime = val;
  },
  SHTGDeviceCheckNumSave(state, val) {
    state.page.submitGroupDemand.SHTG.deviceCheckNum = val;
  },
  SHTGResponseTimeSave(state, val) {
    state.page.submitGroupDemand.SHTG.responseTime = val;
  },
  SHTGMaintenanceTypeSave(state, val) {
    state.page.submitGroupDemand.SHTG.maintenanceType = val;
  },
  SHTGIntroduceSave(state, val) {
    state.page.submitGroupDemand.SHTG.introduce = val;
  },
  XXHTGNumSave(state, val) {
    state.page.submitGroupDemand.XXHTG.num = val;
  },
  XXHTGPriceSave(state, val) {
    state.page.submitGroupDemand.XXHTG.price = val;
  },
  XXHTGApplicationSave(state, val) {
    state.page.submitGroupDemand.XXHTG.application = val;
  },
  XXHTGIntroduceSave(state, val) {
    state.page.submitGroupDemand.XXHTG.introduce = val;
  },
  JRTGPriceSave(state, val) {
    state.page.submitGroupDemand.JRTG.price = val;
  },
  JRTGApplicationSave(state, val) {
    state.page.submitGroupDemand.JRTG.application = val;
  },
  JRTGIntroduceSave(state, val) {
    state.page.submitGroupDemand.JRTG.introduce = val;
  },
  ZXTGNumSave(state, val) {
    state.page.submitGroupDemand.ZXTG.num = val;
  },
  ZXTGPriceSave(state, val) {
    state.page.submitGroupDemand.ZXTG.price = val;
  },
  ZXTGApplicationSave(state, val) {
    state.page.submitGroupDemand.ZXTG.application = val;
  },
  ZXTGIntroduceSave(state, val) {
    state.page.submitGroupDemand.ZXTG.introduce = val;
  }
}

export default mutations
