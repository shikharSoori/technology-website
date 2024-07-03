export const formatName = (name: string): string => {
  const formattedName = name
    .replace(/\s/g, "_") // Replace all spaces with underscores
    .replace(/\//g, "-") // Replace all slashes with dashes
    .replace(/:/g, "@"); // Replace all colons with @


  return formattedName;
};

export const reFormatName = (name: string): string => {
  const reformattedName = name
    .replace(/_/g, " ") // Replace all underscores with spaces
    .replace(/-/g, "/") // Replace all dashes with slashes
    .replace(/@/g, ":"); // Replace all @ with colons



  return reformattedName;
};