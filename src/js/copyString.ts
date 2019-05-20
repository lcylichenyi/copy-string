export default {
  init(str: string): void {
    const hiddenP: Node = document.createElement('p')
    hiddenP.textContent = str
    document.body.appendChild(hiddenP)
    const range: Range = document.createRange()
    range.selectNodeContents(hiddenP)
    const selection: any = document.getSelection()
    if (selection) {
      selection.removeAllRanges()
      selection.addRange(range)
    } else {
      alert('复制失败')
    }
    document.execCommand('copy')
    document.body.removeChild(hiddenP)
    alert('复制成功')
  }
}