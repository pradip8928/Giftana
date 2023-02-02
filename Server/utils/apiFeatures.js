class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  searchByProductName() {
    // const keys = ["productName", "productCompleteName", "productAliasName"];
    const productName = this.queryStr.productName
      ? {
          productName: {
            $regex: this.queryStr.productName,
            $options: "i",
          },
        }
      : {};

    // console.log("search by", productName);

    this.query = this.query.find(productName);

    return this;
  }
  searchByUserName() {
    // const keys = ["productName", "productCompleteName", "productAliasName"];
    const userName = this.queryStr.userName
      ? {
          userName: {
            $regex: this.queryStr.userName,
            $options: "i",
          },
        }
      : {};

    // console.log("search by", productName);

    this.query = this.query.find(userName);

    return this;
  }

  filterByProductPrice() {
    const queryCopy = { ...this.queryStr };

    const removeFields = ["productName", "page", "limit"];

    removeFields.forEach((key) => delete queryCopy[key]);

    // filtering for price

    // console.log("query copy", queryCopy);

    let queryStr = JSON.stringify(queryCopy);

    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);

    this.query = this.query.find(JSON.parse(queryStr));

    console.log(queryStr);

    return this;
  }

  pagination(resultPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;

    const skip = resultPerPage * (currentPage - 1);

    this.query = this.query.limit(resultPerPage).skip(skip);

    return this;
  }
}

module.exports = ApiFeatures;
