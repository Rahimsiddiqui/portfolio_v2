/**
 * Downloads the resume file
 * Make sure you have a resume file at /public/resume.pdf
 */
export const downloadResume = () => {
  // Create an anchor element and trigger download
  const link = document.createElement("a");
  link.href = "/Resume.pdf";
  link.download = "Rahim_Siddiqui_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
