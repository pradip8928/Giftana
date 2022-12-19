class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  searchByProductName() {
    const productName = this.queryStr.productName
      ? {
          productName: {
            $regex: this.queryStr.productName,
            $options: "i",
          },
        }
      : {};

    console.log(productName);

    this.query = this.query.find(productName);

    return this;
  }
}

module.exports = ApiFeatures;
