//柱状图模块1
(function () {
  //1.实例化对象
  var myCharts = echarts.init(document.querySelector('.bar .chart')); 
  //2.指定配置项和数据
  var option = {
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    //修改图标的大小
    grid: {
        left: '0%',
        top: '10px',
        right: '0%',
        bottom: '4%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: [ "旅游行业","教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业" ],
            axisTick: {
                alignWithLabel: true
            },
            //修改刻度标签的相关样式
            axisLabel:{
                color:' rgba(255,255,255,.6)',
                fontSize: '9'
            },
            //x轴样式不显示
            axisLine: {
              show:'false'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            //修改刻度标签的相关样式
            axisLabel:{
                color:' rgba(255,255,255,0.6)',
                fontSize: '12'
            },
            //y轴线条样式
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,0.1)",
                width: '2'
              }
            },
            // y 轴分隔线样式
            splitLine: {
                lineStyle: {
                   color: "rgba(255,255,255,0.1)"
                 }
            }
        }
    ],
    series: [
        {
            name: '直接访问',
            type: 'bar',
            barWidth: '35%',
            data: [200, 300, 300, 900, 1500, 1200, 600],
            itemStyle: {
              //修改柱子圆角
              barBorderRadius: 5
            }
         }
     ]
  };
//3.把配置项给实例对象
myCharts.setOption(option);
//4.让图表跟随屏幕自适应
window.addEventListener('resize',function(){
  myCharts.resize();
})
})();
//柱状图2
(function(){
  // 声明颜色数组
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  //2.实例化对象
  var myCharts = echarts.init(document.querySelector('.bar1 .chart')); 
  //2.指定配置项和数据
  var option = {

    grid: {
      top:'10%',
        left: '22%',
        bottom: '10%',
        // containLabel: true
    },
    xAxis: {
        show:false
    },
    yAxis:[
      {
        type: 'category',
        inverse: true,
        data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
        //不显示y轴线条
        axisLine: {
        show: false
            },
      // 不显示刻度
      axisTick: {
      show: false
      },
      //设置刻度标签
      axisLabel:{
        color: '#fff'
      }
    },
    {
      data: [702, 350, 610, 793, 664],
      inverse: true,
        //不显示y轴线条
        axisLine: {
        show: false
            },
      // 不显示刻度
      axisTick: {
      show: false
      },
      //设置刻度标签
      axisLabel:{
        color: '#fff'
      }
    }
    ],
    series: [
        {
            name: '条',
            type: 'bar',
            data: [70, 34, 60, 78, 69],
            yAxisIndex: 0,
            itemStyle:{
              //圆角
              barBorderRadius:20,
              //修改柱子颜色
              color:function(params){
              // dataIndex 是当前柱子颜色的索引号
                return myColor[params.dataIndex];
              }
            },
            // 柱子之间的距离
            barCategoryGap: 50,
            //柱子的宽度
            barWidth: 10,
            // 图形上的文本标签
            label: {
                 normal: {
                  show: true,
                  // 图形内显示
                  position: "inside",
                  // 文字的显示格式
                  formatter: "{c}%"
                    }
                },
        },
        {
            name: '框',
            type: 'bar',
            barCategoryGap: 50,
            barWidth: 15,
            yAxisIndex: 1,
            data: [100, 100, 100, 100, 100],
            itemStyle: {
              color: "none",
              borderColor: "#00c1de",
              borderWidth: 3,
              barBorderRadius: 15
          },
          }
      ]
   };
    //3.把配置项给实例对象
   myCharts.setOption(option);
//4.让图表跟随屏幕自适应
    window.addEventListener('resize',function(){
      myCharts.resize();
    })
})();
//折线图1模块
(function(){
  var yearData = [
    {
      year: '2020',  // 年份
      data: [  // 两个数组是因为有两条线
           [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
           [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ]
    },
    {
      year: '2021',  // 年份
      data: [  // 两个数组是因为有两条线
           [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
       [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
        ]
    }
   ];
  //1.实例化对象
  var myCharts = echarts.init(document.querySelector('.line .chart')); 
  //2.指定配置项和数据
    var option = {
      color:['#00f2f1','#ed3f35'],
      tooltip: {
          trigger: 'axis'
      },
      legend: {
        data: ['新增粉丝', '新增游客'],
          //修改图例样式
          textStyle: {
            color: '#4c9bfd' // 图例文字颜色
          },
          right: '10%' // 距离右边10%
      },
      grid: {
        top: '20%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        show: true,// 显示边框
        borderColor: '#012f4a',// 边框颜色
        containLabel: true // 包含刻度文字在内
      },
      xAxis: {
          type: 'category',
          boundaryGap: false,// 去除轴内间距
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          axisTick: {
            show: false // 去除刻度线
          },
          axisLabel: {
            color: '#4c9bfd' // 文本颜色
          },
          axisLine: {
            show: false // 去除轴线
          }
      },
      yAxis: {
          type: 'value',
          axisTick: {
            show: false // 去除刻度线
          },
          axisLabel: {
            color: '#4c9bfd' // 文本颜色
          },
          axisLine: {
            show: false // 去除轴线
          },
          splitLine: {
            lineStyle: {
              color: '#012f4a' // y轴分割线颜色
            }
          }
      },
      series: [
          {
              name: '新增粉丝',
              type: 'line',
              //是否是平滑曲线
              smooth: true,
              data:  yearData[0].data[0]
          },
          {
              name: '新增游客',
              type: 'line',
              //是否是平滑曲线
              smooth: true,
              data: yearData[0].data[1]
          },
         
      ]
  };
  //3.把配置项给实例对象
  myCharts.setOption(option);
  //4.让图表跟随屏幕自适应
      window.addEventListener('resize',function(){
        myCharts.resize();
      })
  // 5.点击切换效果
   $('.line h2').on('click','a',function(){
     //点击a之后，根据当前z的索引号找到对应的yeardata的相关对象
    var obj = yearData[$(this).index()];
    option.series[0].data = obj.data[0];
    option.series[1].data = obj.data[1];
    //重新渲染
    myCharts.setOption(option);
    //  console.log(yearData[$(this).index()]);
    //  console.log($(this).index());
   }) 
})();
//折线图2模块
(function(){
  //1.实例化对象
  var myCharts = echarts.init(document.querySelector('.line1 .chart')); 
   //2.指定配置项和数据
   var option = {
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
        top: "0%",
        textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    
    grid: {
      left: "10",
      top: "30",
      right: "10",
      bottom: "10",
      containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: [ "01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","26","28","29","30"],
            // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
            axisLabel: {
              textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: 12
              }
            },
            // x轴线的颜色为   rgba(255,255,255,.2)
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.2)"
              }
    },
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisTick: { show: false },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            },
            axisLabel: {
              textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: 12
              }
            },
         // 修改分割线的颜色
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            }
        }
    ],
    series: [
        {
            name: '邮件营销',
            type: 'line',
             smooth: true,
             // 单独修改线的样式
            lineStyle: {
              color: "#0184d5",
              width: 2 
              },
              areaStyle: {
                // 渐变色，只需要复制即可
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(1, 132, 213, 0.4)"   // 渐变色的起始颜色
                  },
                  {
                    offset: 0.8,
                    color: "rgba(1, 132, 213, 0.1)"   // 渐变线的结束颜色
                  }
                ],
                false
              ),
              shadowColor: "rgba(0, 0, 0, 0.1)"
          },
          // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 8,
        // 设置拐点颜色以及边框
       itemStyle: {
            color: "#0184d5",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        data: [ 30, 40, 30, 40,30, 40, 30,60,20, 40, 30, 40, 30, 40,30, 40, 30,60,20, 40, 30, 40, 30, 40,30, 40, 20,60,50, 40]
        },
        {
            name: '联盟广告',
            type: 'line',
            smooth: true,
            lineStyle: {
              normal: {
                color: "#00d887",
                width: 2
              }
             },
             areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(0, 216, 135, 0.4)"
                    },
                    {
                      offset: 0.8,
                      color: "rgba(0, 216, 135, 0.1)"
                    }
                  ],
                  false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)"
              }
            },
            // 设置拐点 小圆点
            symbol: "circle",
            // 拐点大小
            symbolSize: 5,
            // 设置拐点颜色以及边框
             itemStyle: {
                color: "#00d887",
                borderColor: "rgba(221, 220, 107, .1)",
                borderWidth: 12
            },
            // 开始不显示拐点， 鼠标经过显示
            showSymbol: false,
            data: [ 130, 10, 20, 40,30, 40, 80,60,20, 40, 90, 40,20, 140,30, 40, 130,20,20, 40, 80, 70, 30, 40,30, 120, 20,99,50, 20]
        },
        

    ]
};
 //3.把配置项给实例对象
 myCharts.setOption(option);
 //4.让图表跟随屏幕自适应
     window.addEventListener('resize',function(){
       myCharts.resize();
     })
})();
//饼形图1
(function(){
  
 //1.实例化对象
 var myCharts = echarts.init(document.querySelector('.pie .chart')); 
 //2.指定配置项和数据
 var option = {
  color: [
    "#065aab",
    "#066eab",
    "#0682ab",
    "#0696ab",
    "#06a0ab",
  ],
  tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  legend: {
       bottom:"0%",
         // 小图标的宽度和高度
      itemWidth: 10,
      itemHeight: 10,
      data: ["0岁以下", "20-29岁", "30-39岁", "40-49岁", "50岁以上"],
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
  },
  series: [
      {
          name: '访问来源',
          type: 'pie',
          // 设置饼形图在容器中的位置
          center: ["50%", "45%"],
          radius: ['40%', '60%'],
          
          avoidLabelOverlap: false,
          label: {
              show: false,
              position: 'center'
          },
              label: {
                  show: false,
                  position:"center"   
              },
          labelLine: {
              show: false
          },
          data: [
            { value: 1, name: "0岁以下" },
            { value: 4, name: "20-29岁" },
            { value: 2, name: "30-39岁" },
            { value: 2, name: "40-49岁" },
            { value: 1, name: "50岁以上" }
   ] 
      }
  ]
};
//3.把配置项给实例对象
myCharts.setOption(option);
//4.让图表跟随屏幕自适应
window.addEventListener('resize',function(){
  myCharts.resize();
})
})();
//饼形图2
(function(){
  //1.实例化对象
 var myCharts = echarts.init(document.querySelector('.pie1 .chart')); 
 //2.指定配置项和数据
 var option = {
  color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
  tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
     bottom:"0%",
     itemWidth:10,
     itemHeight:10,
     textStyle:{
       color:"rgba(255,255,255,0.5)",
       fontSize:"12"
     }

      
  },
  series: [
      {
          name: '面积模式',
          type: 'pie',
          radius: ['10%', '70%'],
          center: ['50%', '50%'],
          roseType: "radius",
          label: {
            fontSize: 10
          },
          labelLine:{
            // 连接扇形图线长
          length: 6,
          // 连接文字线长
            length2: 8
          },
          data: [
            { value: 20, name: '云南' },
            { value: 26, name: '北京' },
            { value: 24, name: '山东' },
            { value: 25, name: '河北' },
            { value: 20, name: '江苏' },
            { value: 25, name: '浙江' },
            { value: 30, name: '四川' },
            { value: 42, name: '湖北' }
          ]
      }
  ]
};
//3.把配置项给实例对象
myCharts.setOption(option);
//4.让图表跟随屏幕自适应
window.addEventListener('resize',function(){
  myCharts.resize();
}) 
})();
