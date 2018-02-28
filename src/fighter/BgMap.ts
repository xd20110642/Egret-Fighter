// TypeScript file
//  定义背景地图
module fighter{
    //  可以滚动的地图
    export class BgMap extends egret.DisplayObjectContainer{
        // 图片的引用
        private bmpArr:egret.Bitmap[];
        // 图片的数量
        private rowCount:number;
        //  stage宽 阶段
        private stageW:number;
        //  stage高
        private stageH:number;
        // 纹理本身的高度
        private textureHeight:number;
        // 控制滚动速度
        private speed:number= 2;
        
        public constructor() {
            super()
            //  添加事件监听,并执行函数
            this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this)
        }
        
        // 初始化
        private onAddToStage(event:egret.Event):void{
            //  移除事件监听,并执行函数
            this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
            // 赋值 获取到屏幕宽度
            this.stageW = this.stage.stageWidth;
            this.stageH=this.stage.stageHeight;
            // 处理图片
            let texture:egret.Texture = RES.getRes('bgImage');
            this.textureHeight = texture.textureHeight;
            //  计算在当前屏幕中需要图片的数量
            this.rowCount = Math.ceil(this.stageH/this.textureHeight)+1;
            this.bmpArr=[];
            //  创建这些图片，并设置y坐标，让他们链接起来
        for(let i:number = 0;i<this.rowCount;i++){
           let bgBmp:egret.Bitmap = fighter.createBitmapByName('bgImage');
           bgBmp.y = this.textureHeight*i-(this.textureHeight*this.rowCount-this.stageH);
                this.bmpArr.push(bgBmp);
                //  添加到屏幕上
                this.addChild(bgBmp);
            }
        }
        //  开始滚动
        public start():void {
        //   移除事件监听，并且执行函数
        this.removeEventListener(egret.Event.ENTER_FRAME,this.enterFrameHandler,this)
        }
        // 逐贞运动
        public enterFrameHandler(event:egret.Event):void{
             for(let i:number=0;i<this.rowCount;i++)
            {
                let bgBmp:egret.Bitmap = this.bmpArr[i];
                bgBmp.y+=this.speed;
                //判断超出屏幕后，回到队首，这样来实现循环反复
                if(bgBmp.y > this.stageH) {
                    bgBmp.y = this.bmpArr[0].y-this.textureHeight;
                    this.bmpArr.pop();
                    this.bmpArr.unshift(bgBmp);
                }
            }
        }
        // 暂停滚动
        public pause():void {
            // 移除事件监听，并且执行函数
        this.removeEventListener(egret.Event.ENTER_FRAME,this.enterFrameHandler,this)
        }
    }
}