<script>
  $.ajax({
        type: "get",
        url: "https://www.easy-mock.com/mock/597dd649a1d30433d841e9cb/EventsNews/EventsList ",
        success: function (data) {
          var $page = $('.page');
          for (var index in data) {
            /** * eventDate: 活动的年月日 * eventDay: 活动当天日期 * eventTime: 活动的年月
             * eventText: 装 活动标题、地址、状态 * eventName: 活动标题 * eventAddress: 活动地址 * eventStatus: 活动状态 */ // 创建新活动列表 var $event = $("
            <div class = 'event' > </div>"); 
            // 1. 写入日期
            var $eventDate = $("<div class = 'event-date' > < /div>");
            var $eventDay = $("<span class='event-day'></span >"); 
            var $eventTime = $(" < span class = 'event-time' > < /span>");
            // 2016.7 .15
            var $eventTimeClock = $(" <div class = 'iconfont icon-font-time-style icon-shijian' > </div>");
            $eventDate.append($eventDay, $eventTime, $eventTimeClock); 
            $eventDate.find(".event-day").text(data[index].eventTimeStart.slice(8, 10)); 
            $eventDate.find(".event-time").text(data[index].eventTimeStart.slice(0, 7)); 
            // 2.写入图片 
            var $img = 'img/eventPic.jpg'; 
            //图片地址
            var $eventImg = $("<a href='javascript:;'class='event-img-a'><img src=" + data[index].eventImg +" class='event-img'></a>");
            // 3.写入活动详情 
            var $eventText = $("<ul class = 'event-text' > < /ul>");
            var $eventName = $(" <h3 class = 'event-title' > < a href = '" + data[index].eventLink +"' target='_blank' class='event-name'></a></h3>");
            var $eventAddress = $(" <li class = 'address' > < span class = 'iconfont icon-font-dizhi-style icon-dizhi1' > </span><span class='event-address'></span > < /li>");
            var $eventStatus = $(" <li class = 'status' > < span class = 'iconfont icon-font-status-style icon-icon_status' > </span><span class='event-status'></span > < /li>");
            var $eventTimes = $(" <li class = 'event-times' > < span class = 'iconfont icon-font-status-style icon-shijian' > </span><span class='ev-times'></span > < /li>"); 
            var $eventAnthor = $(" <li class = 'anthor' > < span class = 'iconfont icon-font-status-style icon-zhujiangren' > </span><span class='event-anthor'></span > < /li>"); 
            $eventText.append($eventName,$eventAnthor, $eventAddress, $eventStatus, $eventTimes); 
            $eventText.find(".event-name").text(data[index].eventName); 
            $eventText.find(".event-anthor").text(data[index].eventOrganizer); 
            $eventText.find(".event-address").text(data[index].eventAddress); 
            $eventText.find(".event-status").text(data[index].eventStatus); 
            $eventText.find(".ev-times").text(data[index].eventTimeStart +" — " + data[index].eventTimeEnd.slice(10));
            // 4.插入Dom树 
            $event.append($eventDate,$eventImg, $eventText);
            // 插入page(页码条)之前 
            $page.before($event);
            }
          },
          error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("读取数据失败");
          }
        });
</script>