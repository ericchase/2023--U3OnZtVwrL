<!-- gave up -->

<script lang="ts">
  import { countReverse, range } from '$lib/lib';
  import { onMount, tick } from 'svelte';
  import { get, writable, type Writable } from 'svelte/store';

  let editor: HTMLDivElement;
  let mirror: HTMLDivElement;
  let editorHtml = `<div class="grid">
  <div class="h">Heading 1</div>
  <div class="h">Heading 2</div>
  <div class="h">Heading 3</div>
  <div>Data 1</div>
  <div>Data 2</div>
  <div>Data 3</div>
</div>
`;
  let stylesheet = writable('');
  let rules: HTMLTextAreaElement;
  let rulesCss = `.grid {
  --size: 2px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: var(--size);
  margin: var(--size);
}
.grid > div {
  padding: 4px;
  outline: var(--size) solid lightgray;
}
.grid > .h {
  font-weight: 800;
}
`;

  function update() {
    stylesheet.set(rules.value);
  }
  function keydown(evt: KeyboardEvent & { currentTarget: EventTarget & HTMLTextAreaElement }) {
    if (evt.key === 'Tab') {
      evt.preventDefault();
      let start = evt.currentTarget.selectionStart;
      let end = evt.currentTarget.selectionEnd;
      evt.currentTarget.value = evt.currentTarget.value.substring(0, start) + '  ' + evt.currentTarget.value.substring(end);
      evt.currentTarget.selectionStart = evt.currentTarget.selectionEnd = start + 2;
    }
  }

  let lines = ['aaaaaaaaaaaa', 'aaaaaaaaaaaa', 'aaaaaaaaaaaa', 'aaaaaaaaaaaa'];

  function addLine() {
    lines.push('');
    lines = lines;
  }

  function tryFocusNode(node: Node | null | undefined) {
    if (node instanceof HTMLElement) {
      (node as HTMLElement).focus();
      return true;
    }
    return false;
  }
  function stopPropagation(evt: Event) {
    // evt.stopPropagation();
    evt.stopImmediatePropagation();
  }

  let clientX = 0;
  let clientY = 0;
  function selectUpdate(evt: PointerEvent) {
    //
  }
  function selectStart(evt: PointerEvent & { currentTarget: EventTarget & HTMLDivElement }) {
    evt.currentTarget.addEventListener('pointermove', selectUpdate);
    clientX = evt.clientX;
    clientY = evt.clientY;
  }
  function selectStop(evt: PointerEvent & { currentTarget: EventTarget & Window }) {
    evt.currentTarget.removeEventListener('pointermove', selectUpdate);
  }

  function ed_clk() {
    console.log(editor.children);
    for (const index of countReverse(editor.children)) {
      if (tryFocusNode(editor.children[index])) break;
    }
    // editor.toggleAttribute('contenteditable', true);
    // editor.focus();
    // for (const child of editor.children) {
    //   child.toggleAttribute('contenteditable', true);
    // }
  }
  function ed_fsi() {
    // editor.classList.add('focused');
    // editor.innerHTML = '';
    // editor.innerText = editorHtml;
  }
  function ed_fso() {
    // editorHtml = (editor.innerText ?? '').replace(/[^\S\n\r]{2,}/g, ' ');
    // editor.innerText = '';
    // editor.innerHTML = editorHtml;
    // editor.classList.remove('focused');
    // editor.toggleAttribute('contenteditable', false);
    // for (const child of editor.children) {
    //   child.toggleAttribute('contenteditable', true);
    // }
    mirrorHtml();
  }
  function ed_key(evt: KeyboardEvent & { currentTarget: EventTarget & HTMLDivElement }) {
    switch (evt.key) {
      default:
        return;
      case 'Enter':
        addLine();
        tick().then(() => tryFocusNode(evt.currentTarget.nextElementSibling));
        break;
      case 'ArrowUp':
        tryFocusNode(evt.currentTarget.previousElementSibling);
        break;
      case 'ArrowDown':
        tryFocusNode(evt.currentTarget.nextElementSibling);
        break;
    }
    evt.preventDefault();
  }

  // Works well for contenteditable elements.
  // BUG Some issue with multiple line breaks...
  function insertLineBreak(mainNode: Element) {
    const range = document.getSelection()?.getRangeAt(0);
    if (range) {
      const br = document.createElement('br');
      let { startContainer, endContainer, startOffset, endOffset } = range;
      if (endContainer === mainNode) {
        startContainer = mainNode.childNodes[startOffset];
        endContainer = mainNode.childNodes[endOffset];
      }
      // check if container is a text node
      switch (endContainer.nodeType) {
        case Node.ELEMENT_NODE:
          (endContainer as Element).insertAdjacentElement('afterend', br);
          break;
        case Node.TEXT_NODE:
          range.insertNode(br);
          break;
        default:
          console.log('error (insertLineBreak): neither');
          return;
      }
      const nextNode = br.nextSibling;
      if (nextNode) {
        range.setStart(nextNode, 0);
        range.setEnd(nextNode, 0);
      } else {
        console.log('error (insertLineBreak): next container does not exist');
      }
    }
    // old version
    // let selObj = document.getSelection();
    // if (selObj) {
    //   console.log(selObj);
    //   let selRange = selObj.getRangeAt(0);
    //   selRange.insertNode(document.createElement('br'));
    //   const { startContainer, endContainer, startOffset, endOffset } = selRange;
    //   if (startContainer.textContent) {
    //     console.log(startContainer, endContainer, startOffset, endOffset);
    //     console.log(startContainer.textContent);
    //   }
    //   // evt.currentTarget.innerText = evt.currentTarget.innerText.substring(0, start) + '\n' + evt.currentTarget.innerText.substring(end);
    //   // selRange.setStart(evt.currentTarget, start + 1);
    //   // selRange.setEnd(evt.currentTarget, start + 1);
    // }
  }

  function mirrorHtml() {
    const clone = editor.cloneNode(true);
    // mirror.replaceChildren(clone.childNodes ?? null);
  }

  onMount(() => {
    // editor.innerHTML = editorHtml;
    // rules.value = rulesCss;
    // update();
    // mirrorHtml();
    // const elStyle = document.createElement('style');
    // const head = document.head || document.getElementsByTagName('head')[0];
    // head.appendChild(elStyle);
    // elStyle.appendChild(document.createTextNode(`.transformed {${get(stylesheet)}}`));
    // stylesheet.subscribe((css) => {
    //   if (elStyle.firstChild) {
    //     elStyle.replaceChild(document.createTextNode(`.transformed {${css}}`), elStyle.firstChild);
    //   }
    // });
  });
</script>

<svelte:window on:pointerup={selectStop} />

<div class="col gap fill-w">
  <br />
  <div class="grid gap">
    <div>
      <div class="editor" role="presentation" bind:this={editor}>
        {#each lines as line}
          <div class="line" role="textbox" on:pointerdown={selectStart} on:click={stopPropagation} on:keydown={ed_key} contenteditable tabindex="-0">
            {line}
          </div>
        {/each}
      </div>
    </div>
    <div>
      <textarea bind:this={rules} class="styles" on:input={update} on:keydown={keydown} />
    </div>
  </div>
  <div bind:this={mirror} class="transformed"><div /></div>
</div>

<style>
  .editor {
    height: 100%;
    width: 100%;
    overflow: auto;
    cursor: text;
  }
  .editor > .line {
    outline: none;
    white-space: pre;
  }
  .styles {
    min-height: 18em;
  }

  .col.fill-w {
    width: 100%;
  }

  .row.center {
    align-items: center;
    justify-content: center;
  }

  .gap {
    gap: 2px;
  }

  .grid {
    display: grid;
    & > div {
      background-color: var(--color-1);
      height: 100%;
      width: 100%;
    }
  }
  .grid > :nth-child(1),
  .grid > :nth-child(3) {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 1em;
    min-width: 10em;
    & > div {
      background-color: var(--color-2);
    }
  }
  .grid > :nth-child(2) {
    min-width: 15em;
    & textarea {
      box-sizing: border-box;
      resize: vertical;
      height: 100%;
      width: 100%;
    }
  }

  .grid {
    grid-template-columns: repeat(auto-fit, minmax(20em, 1fr));
  }
</style>
