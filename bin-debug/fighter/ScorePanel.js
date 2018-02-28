var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
// TypeScript file
var fighter;
(function (fighter) {
    // 带有矢量绘制功能的显示容器
    var ScorePanel = (function (_super) {
        __extends(ScorePanel, _super);
        function ScorePanel() {
            var _this = _super.call(this) || this;
            //  创建矢量的方法 
            var g = _this.graphics;
            //  充填的颜色
            g.beginFill(0x000000, 0.8);
            // 绘制矩形
            g.drawRect(0, 0, 400, 200);
            // 填充矩形
            g.endFill();
            //  创建文本
            _this.txt = new egret.TextField();
            // 文字的宽度
            _this.txt.width = 400;
            // 文字的高度
            _this.txt.height = 200;
            // 文字是否居中
            _this.txt.textAlign = 'center';
            // 文字大小
            _this.txt.size = 24;
            // 文字颜色
            _this.txt.textColor = 0xFFFFFF;
            // 文字的坐标
            _this.txt.y = 60;
            // 添加到里面
            _this.addChild(_this.txt);
            // 禁用触摸事件
            _this.touchChildren = false;
            _this.touchEnabled = false;
            return _this;
        }
        ScorePanel.prototype.showScore = function (value) {
            var msg = "您的成绩是：\n" + value + "在来一次吧！";
            // 
            this.txt.text = msg;
        };
        return ScorePanel;
    }(egret.Sprite));
    fighter.ScorePanel = ScorePanel;
    __reflect(ScorePanel.prototype, "fighter.ScorePanel");
})(fighter || (fighter = {}));
//# sourceMappingURL=ScorePanel.js.map