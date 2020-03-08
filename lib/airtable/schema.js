/*
    THIS IS A GENERATED FILE
    Changes might be overwritten in the future, edit with caution!
*/

export const Tables = {
  Customers: 'Customers',
  PushTokens: 'Push Tokens',
  Clerks: 'Clerks',
  Transactions: 'Transactions',
  LineItems: 'Line Items',
  Stores: 'Stores',
  Products: 'Products',
  News: 'News',
  Receipts: 'Receipts',
  Recipes: 'Recipes'
};

export const Columns = {
  Customers: {
    primaryKey: `Primary Key`,
    firstName: `First Name`,
    lastName: `Last Name`,
    zipcode: `Zipcode`,
    phoneNumber: `Phone Number`,
    password: `Password`,
    points: `Points`,
    unlockedRewards: `Unlocked Rewards`,
    transactionIds: `Transactions`,
    receiptIds: `Receipts`,
    pushTokenIds: `Push Tokens`,
    name: `Name`,
    redeemedRewards: `Redeemed Rewards`,
    id: `id`
  },
  'Push Tokens': {
    primaryKey: `Primary Key`,
    createdDate: `Created Date`,
    customerId: `Customer`,
    customerName: `Customer Name`,
    token: `Token`,
    id: `id`
  },
  Clerks: {
    primaryKey: `Primary Key`,
    firstName: `First Name`,
    lastName: `Last Name`,
    password: `Password`,
    transactionIds: `Transactions`,
    storeId: `Store`,
    clerkName: `Clerk Name`,
    id: `id`,
    storeName: `Store Name`
  },
  Transactions: {
    primaryKey: `Primary Key`,
    customerPhoneNumber: `Customer Phone Number`,
    storeId: `Store`,
    productsPurchasedId: `Products Purchased`,
    customerId: `Customer`,
    receiptIds: `Receipts`,
    date: `Date`,
    pointsRewarded: `Points Rewarded`,
    clerkId: `Clerk`,
    customerName: `Customer Name`,
    lineItems: `Line Items`,
    storeName: `Store Name`,
    transaction_id: `transaction_id`,
    id: `id`
  },
  'Line Items': {
    primaryKey: `Primary Key`,
    productId: `Product`,
    quantity: `Quantity`,
    totalPrice: `Total price`,
    productPrice: `Product price`,
    transactionId: `Transaction`,
    productName: `Product Name`,
    id: `id`
  },
  Stores: {
    primaryKey: `Primary Key`,
    ward: `Ward`,
    address: `Address`,
    storeHours: `Store Hours`,
    snapOrEbtAccepted: `SNAP or EBT Accepted`,
    couponProgramPartner: `Coupon Program Partner`,
    transactionIds: `Transactions`,
    latitude: `Latitude`,
    longitude: `Longitude`,
    id: `id`,
    clerkIds: `Clerks`,
    productIds: `Products`,
    storeName: `Store Name`
  },
  Products: {
    primaryKey: `Primary Key`,
    category: `Category`,
    customerCost: `Customer Cost`,
    points: `Points`,
    multiplier: `Multiplier`,
    id: `id`,
    lineItemIds: `Line Items`,
    name: `Name`,
    storeIds: `Stores`,
    image: `Image`
  },
  News: {
    primaryKey: `Primary Key`,
    created: `Created`,
    description: `Description`,
    id: `id`,
    postDate: `Post Date`,
    title: `Title`
  },
  Receipts: {
    primaryKey: `Primary Key`,
    transactionId: `Transaction`,
    attachments: `Attachments`,
    time: `Time`,
    customerId: `Customer`,
    customerName: `Customer Name`,
    id: `id`
  },
  Recipes: {
    primaryKey: `Primary Key`,
    servings: `Servings`,
    prepTimeminutes: `Prep Time (minutes)`,
    cookTimeminutes: `Cook Time (minutes)`,
    ingredients: `Ingredients`,
    instructions: `Instructions`,
    title: `Title`,
    field8: `Field 8`
  }
};