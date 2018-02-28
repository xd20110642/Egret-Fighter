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
    // 子弹，利用对象池
    var Bullet = (function (_super) {
        __extends(Bullet, _super);
        // 
        function Bullet(texture, textureName) {
            var _this = _super.call(this, texture) || this;
            _this.textureName = textureName;
            return _this;
        }
        // 生产
        Bullet.product = function (textureName) {
            if (fighter.Bullet.cacheDict[textureName] == null) {
                fighter.Bullet.cacheDict[textureName] = [];
                var dict = fighter.Bullet.cacheDict[textureName];
                var bullet = void 0;
                if (dict.length > 0) {
                    bullet = dict.pop();
                }
                else {
                    bullet = new fighter.Bullet(RES.getRes(textureName), textureName);
                }
                return bullet;
            }
        };
        //  回收
        Bullet.reclaim = function (bullet, textureName) {
            //  定义子弹的名字
            // let textureName:string=bullet.textureName;
            if (fighter.Bullet.cacheDict[textureName] == null) {
                fighter.Bullet.cacheDict[textureName] = [];
                // dict 的值就是fighter.Bullet.cacheDict[textureName]
                var dict = fighter.Bullet.cacheDict[textureName];
                // 判断是否存在
                if (dict.indexOf(bullet) == -1) {
                    dict.push(bullet);
                }
            }
        };
        // 创建一个对象 一个数据字典
        Bullet.cacheDict = {};
        return Bullet;
    }(egret.Bitmap));
    fighter.Bullet = Bullet;
    __reflect(Bullet.prototype, "fighter.Bullet");
})(fighter || (fighter = {}));
//# sourceMappingURL=Bullet.js.map