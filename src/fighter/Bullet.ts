// TypeScript file
module fighter{
    // 子弹，利用对象池
    export class Bullet extends egret.Bitmap{
        // 创建一个对象 一个数据字典
        private static cacheDict:Object={};
        //可视为子弹类型名
        public textureName:string;
        // 
        public constructor(texture:egret.Texture,textureName:string){
            super(texture);
            this.textureName=textureName;
        }
        // 生产
        public static product(textureName:string):any{
            if(fighter.Bullet.cacheDict[textureName]==null){
                fighter.Bullet.cacheDict[textureName]=[];
                let dict:fighter.Bullet[]=fighter.Bullet.cacheDict[textureName];
                let bullet:fighter.Bullet;
                if(dict.length>0){
                    bullet =dict.pop();
                }else{
                    bullet= new fighter.Bullet(RES.getRes(textureName),textureName);
                }
                return bullet;
            }
            
        }
        //  回收
        public static reclaim(bullet:fighter.Bullet,textureName: string):void{
            //  定义子弹的名字
            // let textureName:string=bullet.textureName;
            if(fighter.Bullet.cacheDict[textureName]==null){
                fighter.Bullet.cacheDict[textureName] = [];
                // dict 的值就是fighter.Bullet.cacheDict[textureName]
                let dict:fighter.Bullet[]=fighter.Bullet.cacheDict[textureName];
                // 判断是否存在
                if(dict.indexOf(bullet)==-1){
                        dict.push(bullet);
                }
            }
        }
    }
}