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
//  定义背景地图
var fighter;
(function (fighter) {
    //  可以滚动的地图
    var BgMap = (function (_super) {
        __extends(BgMap, _super);
        function BgMap() {
            var _this = _super.call(this) || this;
            // 控制滚动速度
            _this.speed = 2;
            //  添加事件监听,并执行函数
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
            return _this;
        }
        // 初始化
        BgMap.prototype.onAddToStage = function (event) {
            //  移除事件监听,并执行函数
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
            // 赋值 获取到屏幕宽度
            this.stageW = this.stage.stageWidth;
            this.stageH = this.stage.stageHeight;
            // 处理图片
            var texture = RES.getRes('bgImage');
            this.textureHeight = texture.textureHeight;
            //  计算在当前屏幕中需要图片的数量
            this.rowCount = Math.ceil(this.stageH / this.textureHeight) + 1;
            this.bmpArr = [];
            //  创建这些图片，并设置y坐标，让他们链接起来
            for (var i = 0; i < this.rowCount; i++) {
                var bgBmp = fighter.createBitmapByName('bgImage');
                bgBmp.y = this.textureHeight * i - (this.textureHeight * this.rowCount - this.stageH);
                this.bmpArr.push(bgBmp);
                //  添加到屏幕上
                this.addChild(bgBmp);
            }
        };
        //  开始滚动
        BgMap.prototype.start = function () {
            //   移除事件监听，并且执行函数
            this.removeEventListener(egret.Event.ENTER_FRAME, this.enterFrameHandler, this);
        };
        // 逐贞运动
        BgMap.prototype.enterFrameHandler = function (event) {
            for (var i = 0; i < this.rowCount; i++) {
                var bgBmp = this.bmpArr[i];
                bgBmp.y += this.speed;
                //判断超出屏幕后，回到队首，这样来实现循环反复
                if (bgBmp.y > this.stageH) {
                    bgBmp.y = this.bmpArr[0].y - this.textureHeight;
                    this.bmpArr.pop();
                    this.bmpArr.unshift(bgBmp);
                }
            }
        };
        // 暂停滚动
        BgMap.prototype.pause = function () {
            // 移除事件监听，并且执行函数
            this.removeEventListener(egret.Event.ENTER_FRAME, this.enterFrameHandler, this);
        };
        return BgMap;
    }(egret.DisplayObjectContainer));
    fighter.BgMap = BgMap;
    __reflect(BgMap.prototype, "fighter.BgMap");
})(fighter || (fighter = {}));
//# sourceMappingURL=BgMap.js.map