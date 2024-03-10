const mongoose = require("mongoose");

// Connecting
mongoose
  .connect("mongodb://127.0.0.1:27017/roadbook", {
    //connect()함수를 통해 데이터베이스와의 연결을 시도
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

// Defining Schema
const customerSchema = mongoose.Schema(
  //customer 스키마 정의
  {
    name: "string", //키와 타입 지정
    age: "number",
    sex: "string",
  },
  {
    collection: "newCustomer", //컬렉션 이름 지정
  }
);

// Sechma -> Model
const Customer = mongoose.model("Schema", customerSchema); //모델로 변환

// Generate Instance
const customer1 = new Customer({ name: "홍길동", age: 30, sex: "남" }); //인스턴스 생성

// Save Data into MongoDB
customer1
  .save() //인스턴스를 데이터베이스에 저장(위의 roadbook 데이터베이스와 연결한 부분 참고)
  .then(() => {
    console.log(customer1);
  })
  .catch((err) => {
    console.log("Error : " + err);
  });

Customer.findById({ _id: "602d79fb542775e0dce0fe22" }, (err, customer) => {
  console.log("UPDATE : Model.findById()");
  if (err) {
    console.log(err);
  } else {
    customer.name = "modified";
    customer.save((err, modified_customer) => {
      if (err) {
        console.log(err);
      } else {
        console.log(modified_customer);
      }
    });
  }
});

//DELETE:Model.remove()
