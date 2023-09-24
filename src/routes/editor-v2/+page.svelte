<script lang="ts">
  import { onMount } from 'svelte';
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

  function ed_clk() {
    editor.toggleAttribute('contenteditable', true);
    editor.focus();
  }
  function ed_fsi() {
    editor.classList.add('focused');
    editor.innerHTML = '';
    editor.innerText = editorHtml;
  }
  function ed_fso() {
    // editorHtml = (editor.innerText ?? '').replace(/[^\S\n\r]{2,}/g, ' ');
    // editor.innerText = '';
    // editor.innerHTML = editorHtml;
    // editor.classList.remove('focused');
    // editor.toggleAttribute('contenteditable', false);
    // mirrorHtml();
  }
  function ed_key(evt: KeyboardEvent & { currentTarget: EventTarget & HTMLDivElement }) {
    if (evt.key === 'Enter') {
      evt.preventDefault();
      insertLineBreak();
    }
  }

  // Works well for contenteditable elements.
  function insertLineBreak() {
    const range = document.getSelection()?.getRangeAt(0);
    if (range) {
      const { startContainer, endContainer } = range;
      console.log(startContainer, endContainer);
      const newNode = document.createTextNode('\n\r');
      range.insertNode(newNode);
      let next = newNode.nextSibling;
      if (next === null) {
        next = newNode.nextSibling;
      }
      if (next !== null) {
        range.setStart(next, 0);
        range.setEnd(next, 0);
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
    mirror.replaceChildren(editor.cloneNode(true));
  }

  onMount(() => {
    editor.innerHTML = editorHtml;
    rules.value = rulesCss;
    update();
    mirrorHtml();

    const elStyle = document.createElement('style');
    const head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(elStyle);
    elStyle.appendChild(document.createTextNode(`.transformed {${get(stylesheet)}}`));
    stylesheet.subscribe((css) => {
      if (elStyle.firstChild) {
        elStyle.replaceChild(document.createTextNode(`.transformed {${css}}`), elStyle.firstChild);
      }
    });
  });
</script>

<div class="col gap fill-w">
  <br />
  <div class="grid3 gap">
    <div class="row center">Default</div>
    <div />
    <div class="row center">Styled</div>
  </div>
  <div class="grid2 gap">
    <div><div bind:this={editor} class="editable" on:click={ed_clk} on:focusin={ed_fsi} on:focusout={ed_fso} on:keydown={ed_key} /></div>
    <div>
      <textarea bind:this={rules} class="styles" on:input={update} on:keydown={keydown} />
    </div>
  </div>
  <div bind:this={mirror} class="transformed"><div /></div>
</div>

<style>
  .editable {
    height: 100%;
    width: 100%;
  }
  .editable:not(.focused) {
    cursor: pointer;
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

  :is(.grid3, .grid2) {
    display: grid;
    & > div {
      background-color: var(--color-1);
      height: 100%;
      width: 100%;
    }
  }
  :is(.grid3, .grid2) > :nth-child(1),
  :is(.grid3, .grid2) > :nth-child(3) {
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
  :is(.grid3, .grid2) > :nth-child(2) {
    min-width: 15em;
    & textarea {
      box-sizing: border-box;
      resize: vertical;
      height: 100%;
      width: 100%;
    }
  }

  .grid3 {
    grid-template-columns: 1fr 1fr 1fr;
  }
  .grid2 {
    grid-template-columns: 1fr 1fr;
  }
</style>
