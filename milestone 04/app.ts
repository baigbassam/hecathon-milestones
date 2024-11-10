// Interface for the resume data
interface ResumeData {
    name: string;
    email: string;
    phone: string;
  }
  
  // Get form and preview elements
  const form = document.getElementById("resume-form") as HTMLFormElement;
  const preview = document.getElementById("resume-preview") as HTMLDivElement;
  
  // Function to generate resume preview
  function generateResumePreview(data: ResumeData): string {
    return `
      <div data-field="name" class="editable">${data.name}</div>
      <p>Email: <span data-field="email" class="editable">${data.email}</span></p>
      <p>Phone: <span data-field="phone" class="editable">${data.phone}</span></p>
    `;
  }
  
  // Function to update resume field
  function updateField(field: string, value: string) {
    switch (field) {
      case "name":
        (document.getElementById("name") as HTMLInputElement).value = value;
        break;
      case "email":
        (document.getElementById("email") as HTMLInputElement).value = value;
        break;
      case "phone":
        (document.getElementById("phone") as HTMLInputElement).value = value;
        break;
    }
  }
  
  // Event listener for form submission
  document.getElementById("generate-resume")?.addEventListener("click", () => {
    // Gather form data
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
  
    // Create a data object
    const resumeData: ResumeData = { name, email, phone };
  
    // Update preview section with generated resume
    preview.innerHTML = generateResumePreview(resumeData);
    enableEditing();
  });
  
  // Function to make fields editable on click
  function enableEditing() {
    const editableElements = document.querySelectorAll(".editable");
  
    editableElements.forEach(element => {
      element.addEventListener("click", (e) => {
        const target = e.target as HTMLElement;
        const field = target.getAttribute("data-field");
        if (field) {
          const currentValue = target.textContent || "";
  
          // Create input for in-place editing
          const input = document.createElement("input");
          input.value = currentValue;
          input.classList.add("editable-input");
  
          // Replace text with input
          target.replaceWith(input);
          input.focus();
  
          // Handle input blur (exit editing mode)
          input.addEventListener("blur", () => {
            const newValue = input.value;
  
            // Update field value in the original element
            target.textContent = newValue;
            input.replaceWith(target);
  
            // Update form field data
            updateField(field, newValue);
          });
  
          // Handle "Enter" key to save changes
          input.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
              input.blur();
            }
          });
        }
      });
    });
  }
  