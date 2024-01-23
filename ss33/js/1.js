let person = {
    name: "Thế Cường",
    age: 18,
    address: "Hải Phòng",
};
console.log("Thông tin ban đầu của đối tượng:");
console.log("Tên:", person.name);
console.log("Tuổi:", person.age);
console.log("Địa chỉ:", person.address);

person.dateOfBirth = "04-06-2005";
delete person.age;
console.log("\nThông tin sau khi thêm ngày sinh và xóa tuổi:");
console.log("Tên:", person.name);
console.log("Ngày sinh:", person.dateOfBirth);
console.log("Địa chỉ:", person.address);
