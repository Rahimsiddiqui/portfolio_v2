/**
 * Downloads the resume file
 */
export const downloadResume = () => {
  // Create an anchor element and trigger download
  const link = document.createElement("a");
  link.href = "/resume.pdf";
  link.download = "Rahim_Siddiqui_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
