/**
 * Created by lynn on 2017/4/1.
 */


var dataSize;     //��������
var pageSize;   //ÿҳ������
var pageCount;    //��ҳ��
var curPage;      //��ǰҳ��

//$(document).ready(function () {
//    var tr = $('.table>tbody>tr');
//    Pages(tr, 10, 1);
//});

function initial(topage) {
    toPage(topage);
    $('#content').on("click", 'ul.pagination>li:nth-child(1) a', function () {
        toPage(1);
    });
    $('#content').on("click", 'ul.pagination>li:nth-child(2) a', function () {
        if (curPage > 1) {
            toPage(curPage - 1);
        }
    });
    $('#content').on("click", 'ul.pagination>li:nth-last-child(1) a', function () {
        toPage(pageCount);
    });
    $('#content').on("click", 'ul.pagination>li:nth-last-child(2) a', function () {
        if (curPage < pageCount) {
            toPage(curPage + 1);
        }
    });

}


function Pages(tr, size, cur) {
    var trs = tr;                                             //�м���
    dataSize = trs.length / 2;                              //��������
    pageSize = size;                                      //ÿҳ������
    pageCount = Math.ceil(dataSize / pageSize);             //��ҳ��
    curPage = parseInt(cur);                                        //��ǰҳ��
    hideAll(trs);
    //toPage(pageSize,pageCount,curPage,1);
    initial(1);
}
function hideAll(trs) {
    trs.each(function () {
        $(this).hide();
    });
}
function createPage(before, text) {
    var li;
    if (text == curPage) {
        li = $("<li class='pages active'><a onclick='toPage(" + text + ")'>" + text + "</a></li>");
    }
    else {
        li = $("<li class='pages'><a onclick='toPage(" + text + ")'>" + text + "</a></li>");
    }
    $(before).before(li);
}
function setPages() {
    var before = $('ul.pagination>li:nth-last-child(3)');
    $('ul.pagination>li').remove(".pages");
    if (pageCount <= 5) {
        for (var i = 1; i <= pageCount; i++) {
            createPage(before, i);
        }
    }
    else {
        if (curPage <= 3) {
            for (var i = 1; i <= 5; i++) {
                createPage(before, i);
            }
        }
        else if (curPage >= pageCount - 2) {
            for (var i = 0; i < 5; i++) {
                createPage(before, pageCount - 4 + i);
            }
        }
        else {
            for (var i = 0; i < 5; i++) {
                //alert(curPage);
                createPage(before, curPage - 2 + i);
            }
        }
    }

}
//�������������ʾ
function checkMore() {
    var premore = $('ul.pagination>li:nth-child(3)'),
        nextmore = $('ul.pagination>li:nth-last-child(3)');
    if (pageCount <= 5) {
        premore.hide();
        nextmore.hide();
    }
    else {
        if (curPage > 3) {
            premore.show();
        }
        else {
            premore.hide();
        }
        if ((curPage < pageCount - 2) && (pageCount > 5)) {
            nextmore.show();
        }
        else {
            nextmore.hide();
        }
    }
}

//���ص�ǰҳ��tr����ʾĿ��ҳ��tr
function toPage(topage) {
    var curStart = (curPage - 1) * pageSize + 1,
        curEnd = curPage * pageSize;
    var toStart = (topage - 1) * pageSize + 1,
        toEnd = topage * pageSize;
    for (var i = curStart; i <= curEnd; i++) {
        $('.table>tbody>tr').not('.expand').eq(i - 1).hide();
        $('.table>tbody>tr').filter('.expand').hide();
    }
    for (var i = toStart; i <= toEnd; i++) {
        $('.table>tbody>tr').not('.expand').eq(i - 1).show();
    }
    curPage = topage;
    //alert(curPage);
    setPages();
    checkMore();
}



