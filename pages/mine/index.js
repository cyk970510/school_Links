
import Dialog from '/vant-weapp/dialog/dialog';
Page({
    data: {

    },
    onLoad: function () {
  
    },
    show() {
        Dialog.confirm({
			title: '提示',
			message: '您还未登陆，请前往登陆'
        }).then(() => {
          // on confirm
        }).catch(() => {
          // on cancel
        });
    }
  })