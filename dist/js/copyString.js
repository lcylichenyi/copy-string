"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    init: function (str) {
        var hiddenP = document.createElement('p');
        hiddenP.textContent = str;
        document.body.appendChild(hiddenP);
        var range = document.createRange();
        range.selectNodeContents(hiddenP);
        var selection = document.getSelection();
        if (selection) {
            selection.removeAllRanges();
            selection.addRange(range);
        }
        else {
            alert('复制失败');
        }
        document.execCommand('copy');
        document.body.removeChild(hiddenP);
        alert('复制成功');
    }
};
