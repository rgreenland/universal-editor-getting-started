export default function decorate(block) {
    const [quoteWrapper] = block.children;
  
    const blockquote = document.createElement('blockquote');
    blockquote.textContent = quoteWrapper.textContent.trim() + "hHHeeyy";
    quoteWrapper.replaceChildren(blockquote);
  }