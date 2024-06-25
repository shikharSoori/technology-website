export const formatName = (name: any) => {
  return name
    .replace(/\s/g, "_") // Replace all spaces with underscores
    .replace(/\//g, "-_"); // Replace all slashes with dashes
};

export const reFormatName = (name: any) => {
  return name
    .replace(/\_/g, " ") // Replace all spaces with underscores
    .replace(/-\s/g, "/"); // Replace all slashes with dashes
};
