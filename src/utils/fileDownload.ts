/**
 * Downloads content as a file
 * @param content - The content to download
 * @param filename - The name of the file
 * @param mimeType - The MIME type of the file
 */
export const downloadFile = (
  content: string,
  filename: string,
  mimeType: string = "application/json"
): void => {
  // Create a blob from the content
  const blob = new Blob([content], { type: mimeType });

  // Create a download link
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();

  // Cleanup
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
