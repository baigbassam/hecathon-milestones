var _a;
// Get form and preview elements
var form = document.getElementById("resume-form");
var preview = document.getElementById("resume-preview");
// Function to generate resume preview
function generateResumePreview(data) {
    return "\n      <div data-field=\"name\" class=\"editable\">".concat(data.name, "</div>\n      <p>Email: <span data-field=\"email\" class=\"editable\">").concat(data.email, "</span></p>\n      <p>Phone: <span data-field=\"phone\" class=\"editable\">").concat(data.phone, "</span></p>\n    ");
}
// Function to update resume field
function updateField(field, value) {
    switch (field) {
        case "name":
            document.getElementById("name").value = value;
            break;
        case "email":
            document.getElementById("email").value = value;
            break;
        case "phone":
            document.getElementById("phone").value = value;
            break;
    }
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
    enableEditing();
});
// Function to make fields editable on click
function enableEditing() {
    var editableElements = document.querySelectorAll(".editable");
    editableElements.forEach(function (element) {
        element.addEventListener("click", function (e) {
            var target = e.target;
            var field = target.getAttribute("data-field");
            if (field) {
                var currentValue = target.textContent || "";
                // Create input for in-place editing
                var input_1 = document.createElement("input");
                input_1.value = currentValue;
                input_1.classList.add("editable-input");
                // Replace text with input
                target.replaceWith(input_1);
                input_1.focus();
                // Handle input blur (exit editing mode)
                input_1.addEventListener("blur", function () {
                    var newValue = input_1.value;
                    // Update field value in the original element
                    target.textContent = newValue;
                    input_1.replaceWith(target);
                    // Update form field data
                    updateField(field, newValue);
                });
                // Handle "Enter" key to save changes
                input_1.addEventListener("keypress", function (event) {
                    if (event.key === "Enter") {
                        input_1.blur();
                    }
                });
            }
        });
    });
}
