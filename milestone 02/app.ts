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
      <h3>${data.name}</h3>
      <p>Email: ${data.email}</p>
      <p>Phone: ${data.phone}</p>
    `;
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
  });
  