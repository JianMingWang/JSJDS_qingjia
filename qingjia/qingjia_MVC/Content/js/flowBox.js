/**
 * Created by lynn on 2017/3/23.
 */
function flow(mh, mv) {//����mh��mv�Ƕ������ݿ�֮��ļ�࣬mh��ˮƽ���룬mv�Ǵ�ֱ����
    var w = document.getElementById('main-content').offsetWidth;//����ҳ����
    var ul = document.getElementById('content-container');
    var mincol=3;
    var li = ul.getElementsByClassName('content-block');
    var iw = li[0].offsetWidth + mh;//�������ݿ�Ŀ��
    var c = mincol<Math.floor(w / iw)?Math.floor(w / iw):mincol;//��������
    ul.style.width = iw * c - mh + "px";//����ul�Ŀ�����ʺϱ��������css�����margin���������ݾ���

    var liLen = li.length;
    var lenArr = [];
    for (var i = 0; i < liLen; i++) {//����ÿһ�����ݿ齫�߶ȼ�������
        lenArr.push(li[i].offsetHeight);
    }

    var oArr = [];
    for (var i = 0; i < c; i++) {//�ѵ�һ���ŷźã�����ÿһ�еĸ߶ȼ�������oArr
        li[i].style.top = "0";
        li[i].style.left = iw * i + "px";
        li[i].style.opacity = "1";
        li[i].style["-moz-opacity"] = "1";
        li[i].style["filter"] = "alpha(opacity=100)";
        oArr.push(lenArr[i]);
    }

    for (var i = c; i < liLen; i++) {//���������ݿ鶨λ����̵�һ�к��棬Ȼ���ٸ��¸��еĸ߶�
        var x = _getMinKey(oArr);//��ȡ��̵�һ�е�����ֵ
        li[i].style.top = oArr[x] + mv + "px";
        li[i].style.left = iw * x + "px";
        li[i].style.opacity = "1";
        li[i].style["-moz-opacity"] = "1";
        li[i].style["filter"] = "alpha(opacity=100)";
        oArr[x] = lenArr[i] + oArr[x] + mv;//���¸��еĸ߶�
    }


}
//ͼƬ������ɺ�ִ��
window.onload = function() {flow(20, 20)};
//�ı䴰�ڴ�Сʱ���²���
var re;
window.onresize = function() {
    clearTimeout(re);
    re = setTimeout(function() {flow(20, 20);}, 200);


}

//��ȡ������������ֵ
function _getMaxValue(arr) {
    var a = arr[0];
    for (var k in arr) {
        if (arr[k] > a) {
            a = arr[k];
        }
    }
    return a;
}
//��ȡ����������Сֵ������
function _getMinKey(arr) {
    var a = arr[0];
    var b = 0;
    for (var k in arr) {
        if (arr[k] < a) {
            a = arr[k];
            b = k;
        }
    }
    return b;
}