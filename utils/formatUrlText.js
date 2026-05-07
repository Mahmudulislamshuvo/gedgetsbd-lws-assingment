/**
 * যেকোনো সাধারণ টেক্সটকে URL-এর জন্য সেফ (Safe) ফরম্যাটে রূপান্তর করে।
 * @param {string} text - যে টেক্সট ঠিক করতে হবে (যেমন: "Smartphones & Tablets")
 * @returns {string} - URL সেফ টেক্সট
 */
export const formatUrlText = (text) => {
  if (!text) return "";
  return encodeURIComponent(text);
};
