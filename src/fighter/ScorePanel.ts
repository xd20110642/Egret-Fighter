// TypeScript file
module fighter{
    // 带有矢量绘制功能的显示容器
    export class ScorePanel extends egret.Sprite{
        //  文本渲染
        private txt:egret.TextField;
        
        public constructor() {
            super();
            //  创建矢量的方法 
            let g:egret.Graphics = this.graphics;
            //  充填的颜色
            g.beginFill(0x000000,0.8);
            // 绘制矩形
            g.drawRect(0,0,400,200);
            // 填充矩形
            g.endFill();
            //  创建文本
            this.txt = new egret.TextField();
            // 文字的宽度
            this.txt.width = 400;
            // 文字的高度
            this.txt.height = 200;
            // 文字是否居中
            this.txt.textAlign = 'center';
            // 文字大小
            this.txt.size = 24;
            // 文字颜色
            this.txt.textColor=0xFFFFFF;
            // 文字的坐标
            this.txt.y=60;
            // 添加到里面
            this.addChild(this.txt);
            // 禁用触摸事件
            this.touchChildren =false;
            this.touchEnabled=false;
        }

        public showScore(value:number):void{
            let msg:string="您的成绩是：\n"+value+"在来一次吧！";
            // 
            this.txt.text =msg;
        }
    }
}