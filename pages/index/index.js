//index.js
import Dialog from '/vant-weapp/dialog/dialog';
Page({
	data: {
		active: 1,
		tabArr: [
			{
				title: '全部',
				name: 'all'
			},
			{
				title: '活动',
				name: 'active'
			},
			{
				title: '讲座',
				name: 'lecture'
			}
		],
		contentData: [
		{
			img: './../../../images/mode/content-header.png',
			name: '小明',
			school: '医学信息工程学院',
			content: '发布活动： 与xx月xx日有活动xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
			contentImg: './../../../images/mode/content-body.jpg',
			forwards: 30,
			comments: 20,
			supports: 10
		},
		{
			img: './../../../images/mode/content-header.png',
			name: '小鸿',
			school: '一院',
			content: '发布活动： 与xx月xx日有活动xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
			contentImg: './../../../images/mode/content-body.jpg',
			forwards: 0,
			comments: 0,
			supports: 0
		}
		],
	},
	//事件处理函数
	bindViewTap: function() {

	},
	onLoad: function () {

	},
	changeTab(e) {
		switch(e.detail.name) {
			case 'active':
				// do something
				break;
			case 'lecture':
				// do something
				break;
			default: 
				// do something
		}
		// console.log(e.detail.title);
	},
	addActive () {
		Dialog.confirm({
				title: '提示',
				message: '您还未实名登记，是否前往实名登记'
			}).then(() => {
				// on confirm
			}).catch(() => {
				// on cancel
	  	});
	}
})
