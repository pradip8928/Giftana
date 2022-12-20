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

  filterByProductPrice() {
    const queryCopy = { ...this.queryStr };

    const removeFields = ["productName"];

    removeFields.forEach((key) => delete queryCopy[key]);

    // filtering for price

    console.log(queryCopy);

    let queryStr = JSON.stringify(queryCopy);

    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);

    this.query = this.query.find(JSON.parse(queryStr));

    console.log(queryStr);

    return this;
  }
}

module.exports = ApiFeatures;
