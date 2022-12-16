class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};

    console.log(keyword);

    this.query = this.query.find({ ...keyword });

    return this;
  }

  filter() {
    const queryCopy = { ...this.queryStr };

    console.log(queryCopy);

    // Remove some fields for category

    const removeFields = ["keyword"];

    removeFields.forEach((key) => queryCopy[key]);

    console.log(queryCopy);

    this.query = this.query.find(queryCopy);
    return this;
  }
}

module.exports = ApiFeatures;
