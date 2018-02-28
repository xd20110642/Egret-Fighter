// TypeScript file
//  声明模块
module fighter{
    //  导出碰撞检测
    export class GameUtil {
        // 基于矩形的碰撞检测
        public static hitTest(obj1:egret.DisplayObject,obj2:egret.DisplayObject):boolean { /* 类型为显示对象的类*/ 
            //     获取对象的测量边距也就是距离
                let rect1:egret.Rectangle = obj1.getBounds()
                let rect2:egret.Rectangle = obj2.getBounds()
                //  进行判断 将对象的参数给与对象
                rect1.x = obj1.x;
                rect1.y = obj1.y;

                rect2.x = obj2.x;
                rect2.y = rect2.y;
                //  进行比较 如果相同返回true 不相同返回false
                return rect1.intersects(rect2);
        }
    };

     /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     */
    //  导出函数
    export function createBitmapByName(name:string):egret.Bitmap {
        let  result:egret.Bitmap = new egret.Bitmap();
        let texture:egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
    //   private createBitmapByName(name: string) {
    //     let result = new egret.Bitmap();
    //     let texture: egret.Texture = RES.getRes(name);
    //     result.texture = texture;
    //     return result;
    // }
}