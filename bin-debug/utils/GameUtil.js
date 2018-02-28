var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
// TypeScript file
//  声明模块
var fighter;
(function (fighter) {
    //  导出碰撞检测
    var GameUtil = (function () {
        function GameUtil() {
        }
        // 基于矩形的碰撞检测
        GameUtil.hitTest = function (obj1, obj2) {
            //     获取对象的测量边距也就是距离
            var rect1 = obj1.getBounds();
            var rect2 = obj2.getBounds();
            //  进行判断 将对象的参数给与对象
            rect1.x = obj1.x;
            rect1.y = obj1.y;
            rect2.x = obj2.x;
            rect2.y = rect2.y;
            //  进行比较 如果相同返回true 不相同返回false
            return rect1.intersects(rect2);
        };
        return GameUtil;
    }());
    fighter.GameUtil = GameUtil;
    __reflect(GameUtil.prototype, "fighter.GameUtil");
    ;
    /**
    * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
    */
    //  导出函数
    function createBitmapByName(name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
    fighter.createBitmapByName = createBitmapByName;
    //   private createBitmapByName(name: string) {
    //     let result = new egret.Bitmap();
    //     let texture: egret.Texture = RES.getRes(name);
    //     result.texture = texture;
    //     return result;
    // }
})(fighter || (fighter = {}));
//# sourceMappingURL=GameUtil.js.map