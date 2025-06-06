/* 
  用于测量和报告网页性能指标的工具文件
  - CLS (Cumulative Layout Shift) - 累计布局偏移
- FID (First Input Delay) - 首次输入延迟
- FCP (First Contentful Paint) - 首次内容绘制
- LCP (Largest Contentful Paint) - 最大内容绘制
- TTFB (Time to First Byte) - 首字节时间
*/
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
