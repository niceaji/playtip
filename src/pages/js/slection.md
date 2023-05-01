---
layout: ~/layouts/CodeLayout.astro
title: 선택된 텍스트 가져오기
description:
isJS: true
---

## js

```js
function getSelectedText() {
  return window.getSelection().toString();
}
// 하단 Console에서 텍스트 선택후에 실행하기 버튼
console.log(getSelectedText());
```
