// TypeScript file
// 导出模块
module fighter{
    // 导出对象飞机池
    export class Airplane extends egret.DisplayObjectContainer{
    //  飞机位图    
    private bmp:egret.Bitmap;
    //  创建子弹间隔
    private fireDelay:number;
    // 定时喷射
    private fireTime:egret.Timer;
    // 飞机生命值
    public blood: number;
    //  数据缓存
    private static cacheDict: Object = {};
    //  构造函数
    public constructor(texture:egret.Texture,fireDelay:number) {
        super();
        this.fireDelay = fireDelay;
        this.bmp = new egret.Bitmap(texture);
        //  添加到列表中
        this.addChild(this.bmp);
        // 设置时间
        this.fireTime = new egret.Timer(fireDelay);
        // 注册事件监听器 在计时过程中触发 后面的方法
        this.fireTime.addEventListener(egret.TimerEvent.TIMER,this.createBullet,this);

    }
    // 生产   
    public static produce(textureName:string,fireDelay:number):any {
            if(fighter.Airplane.cacheDict[textureName]==null) {
                fighter.Airplane.cacheDict[textureName]=[];
            };
        //  存储参数
        let dict:fighter.Airplane[] = fighter.Airplane.cacheDict[textureName];
        //  战斗机
        let theFighter:fighter.Airplane;
        if(dict.length>0) {
            //  删除数组的并返回最后一个
            theFighter = dict.pop()
        }else{
            theFighter = new fighter.Airplane(RES.getRes(textureName),fireDelay);
        }
        theFighter.blood=10;
    }
    // 回收
    public static reclaim(theFighter:fighter.Airplane,textureName:string):void{
        if(fighter.Airplane.cacheDict[textureName]==null){
            fighter.Airplane.cacheDict[textureName]=[];
            let dict:fighter.Airplane[]=fighter.Airplane.cacheDict[textureName]
        //     判断是否存在
            if(dict.indexOf(theFighter)==-1){
                //  向数组添加内容
                dict.push(theFighter)
            }
}
    }
    // 开火
    public fire(): void{
        // 启动定时器
        this.fireTime.start();
    }
    // 停火
    public stopFire():void{
        // 清楚定时器
        this.fireTime.stop()
    }
    // 创建子弹 当时间间隔完毕后执行里面的函数
    private createBullet(evt:egret.TimerEvent):void {
        this.dispatchEventWith('createBullet');
    }
    }
}