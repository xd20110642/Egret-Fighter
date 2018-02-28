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
// 导出模块
var fighter;
(function (fighter) {
    // 导出对象飞机池
    var Airplane = (function (_super) {
        __extends(Airplane, _super);
        //  构造函数
        function Airplane(texture, fireDelay) {
            var _this = _super.call(this) || this;
            _this.fireDelay = fireDelay;
            _this.bmp = new egret.Bitmap(texture);
            //  添加到列表中
            _this.addChild(_this.bmp);
            // 设置时间
            _this.fireTime = new egret.Timer(fireDelay);
            // 注册事件监听器 在计时过程中触发 后面的方法
            _this.fireTime.addEventListener(egret.TimerEvent.TIMER, _this.createBullet, _this);
            return _this;
        }
        // 生产   
        Airplane.produce = function (textureName, fireDelay) {
            if (fighter.Airplane.cacheDict[textureName] == null) {
                fighter.Airplane.cacheDict[textureName] = [];
            }
            ;
            //  存储参数
            var dict = fighter.Airplane.cacheDict[textureName];
            //  战斗机
            var theFighter;
            if (dict.length > 0) {
                //  删除数组的并返回最后一个
                theFighter = dict.pop();
            }
            else {
                theFighter = new fighter.Airplane(RES.getRes(textureName), fireDelay);
            }
            theFighter.blood = 10;
        };
        // 回收
        Airplane.reclaim = function (theFighter, textureName) {
            if (fighter.Airplane.cacheDict[textureName] == null) {
                fighter.Airplane.cacheDict[textureName] = [];
                var dict = fighter.Airplane.cacheDict[textureName];
                //     判断是否存在
                if (dict.indexOf(theFighter) == -1) {
                    //  向数组添加内容
                    dict.push(theFighter);
                }
            }
        };
        // 开火
        Airplane.prototype.fire = function () {
            // 启动定时器
            this.fireTime.start();
        };
        // 停火
        Airplane.prototype.stopFire = function () {
            // 清楚定时器
            this.fireTime.stop();
        };
        // 创建子弹 当时间间隔完毕后执行里面的函数
        Airplane.prototype.createBullet = function (evt) {
            this.dispatchEventWith('createBullet');
        };
        //  数据缓存
        Airplane.cacheDict = {};
        return Airplane;
    }(egret.DisplayObjectContainer));
    fighter.Airplane = Airplane;
    __reflect(Airplane.prototype, "fighter.Airplane");
})(fighter || (fighter = {}));
//# sourceMappingURL=Airplane.js.map