function Job(id, title, description, completed) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = completed;
}
let jobs = [];
function addJob() {
    let id = prompt("Nhập id của công việc:");
    let title = prompt("Nhập tiêu đề công việc:");
    let description = prompt("Nhập mô tả công việc:");
    let completed = prompt("Công việc đã hoàn thành (true/false):").toLowerCase() === 'true';
    let newJob = new Job(id, title, description, completed);
    jobs.push(newJob);
    console.log("Đã thêm mới công việc.");
}
function displayJobs() {
    console.log("Danh sách công việc:");
    jobs.forEach(function(job) {
        console.log("ID:", job.id);
        console.log("Tiêu đề:", job.title);
        console.log("Mô tả:", job.description);
        console.log("Hoàn thành:", job.completed);
        console.log("\n");
    });
}
function searchJobById() {
    let searchId = prompt("Nhập id của công việc cần tìm:");
    let foundJob = jobs.find(function(job) {
        return job.id === searchId;
    });
    if (foundJob) {
        console.log("Thông tin công việc:");
        console.log("ID:", foundJob.id);
        console.log("Tiêu đề:", foundJob.title);
        console.log("Mô tả:", foundJob.description);
        console.log("Hoàn thành:", foundJob.completed);
    } else {
        console.log("Không tìm thấy công việc với ID là", searchId);
    }
}
while (true) {
    let choice = prompt("Chọn một lựa chọn:\n1. Thêm mới công việc\n2. Hiển thị danh sách công việc\n3. Tìm kiếm công việc theo id\n4. Thoát");
    switch (choice) {
        case '1':
            addJob();
            break;
        case '2':
            displayJobs();
            break;
        case '3':
            searchJobById();
            break;
        case '4':
            console.log("Chương trình kết thúc.");
            process.exit();
        default:
            console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
    }
}
