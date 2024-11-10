var _a;
// Get form and preview elements
var form = document.getElementById("resume-form");
var preview = document.getElementById("resume-preview");
// Function to generate resume preview
function generateResumePreview(data) {
    return "\n      <h3>".concat(data.name, "</h3>\n      <p>Email: ").concat(data.email, "</p>\n      <p>Phone: ").concat(data.phone, "</p>\n    ");
}
// Event listener for form submission
(_a = document.getElementById("generate-resume")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    // Gather form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    // Create a data object
    var resumeData = { name: name, email: email, phone: phone };
    // Update preview section with generated resume
    preview.innerHTML = generateResumePreview(resumeData);
});
