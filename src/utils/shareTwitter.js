export function shareTwitter(title) {
  let url = window.location.href;
  window.open(
    `https://x.com/intent/post?text=${encodeURIComponent(
      title
    )}%0A${encodeURIComponent(url)}`,
    "",
    "menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=400, width=600"
  );
  return false;
}
