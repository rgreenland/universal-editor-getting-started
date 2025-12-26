
/**
 * Billboard-1 Decorator (default export)
 * Entry point: decorate(block)
 * `block` is the root element containing semantic HTML to enhance.
 */
export default function decorate(block) {
    if (!block || block.nodeType !== 1) return;
    // Idempotency
    if (block.dataset.decorated === 'true') return;
    block.dataset.decorated = 'true';
  
    // Base class
    block.classList.add('bb1');
  
    // Build inner wrapper and move children inside (non-destructive)
    const inner = document.createElement('div');
    inner.className = 'bb1__inner';
    while (block.firstChild) inner.appendChild(block.firstChild);
    block.appendChild(inner);
  
    // Title: use first heading or element marked as data-aue-prop="title"
    const title = inner.querySelector('h1, h2, [data-aue-prop="title"]');
    if (title) title.classList.add('bb1__title');
  
    // Description container
    const desc = document.createElement('div');
    desc.className = 'bb1__desc';
    if (!desc.hasAttribute('data-aue-prop')) {
      desc.setAttribute('data-aue-prop', 'description');
      desc.setAttribute('data-aue-type', 'text');
      desc.setAttribute('data-aue-label', 'Description');
    }
  
    // Move everything between title and actions into description
    let cursor = title ? title.nextSibling : inner.firstChild;
    while (cursor) {
      const next = cursor.nextSibling;
      if (isActionsContainer(cursor)) break;
      desc.appendChild(cursor);
      cursor = next;
    }
    if (title?.nextSibling) {
      inner.insertBefore(desc, title.nextSibling);
    } else {
      inner.insertBefore(desc, inner.firstChild);
    }
  
    // Actions: normalize links into a flex button bar
    let actionSource = inner.querySelector('.actions, nav, ul, ol');
    const links = actionSource
      ? Array.from(actionSource.querySelectorAll('a'))
      : Array.from(inner.querySelectorAll(':scope > a'));
  
    const actions = document.createElement('div');
    actions.className = 'bb1__actions';
  
    links.forEach((link, idx) => {
      link.classList.add('bb1__button');
      link.dataset.variant = link.dataset.variant || 'secondary';
  
      const iconName = link.dataset.icon;
      if (iconName && !link.querySelector('.bb1__icon')) {
        const icon = document.createElement('span');
        icon.className = 'bb1__icon';
        icon.setAttribute('aria-hidden', 'true');
        icon.dataset.icon = iconName;
        link.insertBefore(icon, link.firstChild);
      }
  
      // Optional client-side RBAC hint (true RBAC should be upstream)
      if (link.getAttribute('data-rbac') === 'deny') {
        link.hidden = true;
      }
  
      // Analytics hook
      link.addEventListener('click', () => {
        link.dispatchEvent(
          new CustomEvent('billboard1:click', {
            bubbles: true,
            detail: {
              index: idx,
              label: link.textContent?.trim() || '',
              href: link.getAttribute('href') || '',
            },
          }),
        );
      });
  
      actions.appendChild(link);
    });
  
    if (actionSource) actionSource.replaceWith(actions);
    else inner.appendChild(actions);
  
    // Variant: inverse by default
    if (!block.classList.contains('bb1--default')) {
      block.classList.add('bb1--inverse');
    }
  
    setupObserver(inner, actions);
  }
  
  function isActionsContainer(el) {
    return (
      el &&
      el.nodeType === 1 &&
      (el.matches?.('.actions') || el.matches?.('nav') || el.matches?.('ul, ol'))
    );
  }
  
  function setupObserver(inner, actions) {
    const obs = new MutationObserver((muts) => {
      for (const m of muts) {
        const addedLinks = Array.from(m.addedNodes)
          .filter((n) => n.nodeType === 1)
          .flatMap((n) => (n.matches('a') ? [n] : Array.from(n.querySelectorAll?.('a') || [])));
  
        addedLinks.forEach((link) => {
          if (!link.classList.contains('bb1__button')) {
            link.classList.add('bb1__button');
          }
          actions.appendChild(link);
        });
      }
    });
    obs.observe(inner, { childList: true, subtree: true });
  }
  