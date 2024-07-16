/*
 * @Author: Angelo
 * @Date: 2024-07-15 16:31:54
 * @version: 
 * @Descripttion: 
 */
//等值缩小（给出一个值让他完全等于，完全不等于，等于，不等于的情况）
// === !== == != 

function getOnlyName(userName: string | string[] | null) {
    //使用这种!=的方式
    if (userName != null) {
        console.log(userName);
    }
}

getOnlyName('angelo')