// ==UserScript==
// @name         干你丫的评教系统(热海大专版)
// @namespace    https://www.03ye.com/
// @version      1.0
// @description  安装脚本后直接打开评教系统进入测评，便可自动选完所有选项（选项只会包含优秀、良好、较好，做人留一线，日后好相见！）
// @author       回忆
// @include      http://210.37.144.134/tqc/proj/evaluatevl-0/module/task/org/*/*/*/*/*/*/*/*
// @icon         http://210.37.144.134/tqc/resources/img/favicon.ico
// @grant        none
// ==/UserScript==
setTimeout( function(){
	pj();
},500);
//设置休眠0.5s防止网页未加载完成时脚本就执行完了
function pj(){
//i小于等于的数为题目数，一般30足够
for (var i=0;i<=30;i++)
{
//通过Math函数生成随机数配合eq选择器来实现答案随机
let v=Math.floor(Math.random()*3);//此条语句表示随机生成0,1,2这三个整数，floor表向下取整
$('input:radio').eq(i*5+v).prop('checked', true);
}
}
//脚本实现思路：一个题目里有5个选项，为优秀、良好、较好、一般、较差，分别对应5个radio，eq(0)便选择的是第一个题目的第一个选项，eq(5)则是第二个题目的第一个选项，通过每次循环时生成随机数并加入便可实现随机答案
