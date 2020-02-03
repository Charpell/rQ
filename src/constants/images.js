const images = {
  first: require('../assets/images/onboarding/first.png'),
  second: require('../assets/images/onboarding/second.png'),
  third: require('../assets/images/onboarding/third.png'),
  fourth: require('../assets/images/onboarding/fourth.png'),
  icon: require("../assets/icons/icon.png"),
  back: require('../assets/iconone/back.png'),
  analytics: require('../assets/iconone/analytics.png'),
  chris: require('../assets/iconone/chris_photo.png'),
  twoarrow: require('../assets/iconone/twoarrow.png'),
  cube: require('../assets/iconone/cube.png'),
  eye: require('../assets/iconone/eye.png'),
  eyeslash: require('../assets/iconone/eye-slash.png'),
  gold: require('../assets/iconone/gold.png'),
  menu: require('../assets/iconone/menu.png'),
  home: require('../assets/iconone/home.png'),
  homeAlt: require('../assets/iconone/home-alt.png'),
  leftarrow: require('../assets/iconone/left-arrow.png'),
  leftarrowleft: require('../assets/iconone/left-arrow-from-left.png'),
  mobileAndroid: require('../assets/iconone/mobile-android.png'),
  receiptAlt: require('../assets/iconone/receipt-alt.png'),
  receipt: require('../assets/iconone/receipt.png'),
  userSquare: require('../assets/iconone/user-square.png'),
  volume: require('../assets/iconone/volume.png'),
  wallet: require('../assets/iconone/wallet.png'),
  walletAlt: require('../assets/iconone/wallet-alt.png'),
  userSquare: require('../assets/iconone/user-square.png'),
}

export const newArry = () => {
  let arry = []
  for (const property in images) {
    arry.push(images[property])
  }
  return arry
}

export default images