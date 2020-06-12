import React from 'react';
// import { useParams } from 'react-router-dom';
import Post from '../../components/Post';
import HeadBar from '../../components/HeadBar';

import styles from './.module.css';

export default _ => {
  // const { pid } = useParams();
  return (
    <div className={styles.page}>
      <header>
        <HeadBar />
      </header>
      <div className={styles.postcard}>
        <Post post={mdStr} />
      </div>
    </div>
  );
};

const mdStr = `
# 无事生非

> For Alice

里来一个的木。

知道点的，自然太多去一，真的上了一天大家而且到了到十，五个而且想去只见。来的来了行为的想，墨子衣服是现亲的⋯差点要一在哪。爷的万不原来了吗，本人不舒这一一下点半，如果这时篇原虽然。

举人的时妈的今天不在色也，这个九二了一回家清楚十二不要，以为表示，很多不想提到是我好是了小。战士还是夏天。怎样其实是的留心精彩又是，就觉定会之后。

刀剑会不前的：却没是哪时间看那不得⋯并没便将脚踏我也⋯出了走近们可像是彷徨。来吃这个啊啊那时，先生是不地图：该不还记现我，有些方法抽到抱歉。一个人的这样。

是新一百的事鼻子要吃下的，不适然也时候麻烦因为，好友外国上课因为们是：有够脾气出去和气。

是一我们于这然好，沉默周围是一坐在⋯会很都要人说似乎许多，带着。然后办法时光了吧，去了漫画附近，喜欢明天台湾外一忘记买了的走，一直做到一个。认真对方了不连殳吃人秃头。

## 标题党

包包仿佛⋯类的著就，自己问题并不下课，我不跟我啊啊的*自有*点。

关键字\`const\`以及\`const str = '头伸过来'\`

都是点也就这现在来好。子就个月这种**政治**没有听得。

他不看到是这又是冷静，渐渐好像牛奶来越他们，的车是真本不：要买他们不舒中国。文章爱啊了手是想忽而那就⋯报告好友家都不知一齐，原来是不留言我在我没欢这，开箱里是。

| Unset         | Are           | Cool  | 中文          | Are           | Cool  |
| ------------- |:-------------:| -----:| :------------ |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 | col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 | col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 | zebra stripes | are neat      |    $1 |
| 苹果          | 梨子          |  香蕉 | 苹果          | 梨子          |  香蕉 | 

以及$x^2$
$$E=3mc_3^2\\int_\\Omega\\frac{x^2}{\\sqrt{1-x^2}}dx\\text{XX公式}
\\int_\\Omega g(X)dP(\\omega)$$

## What is your problem

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nisl ipsum, pharetra a tellus tincidunt, varius commodo eros. Nam id ultricies lacus, et mollis dolor. Etiam fringilla, metus nec tincidunt consequat, est tellus cursus erat, et consectetur ex erat consectetur eros. Donec sit amet volutpat ligula. Praesent fermentum suscipit ante vel rutrum. Integer eget est pellentesque, eleifend augue eu, semper lacus. Pellentesque volutpat eros id lorem interdum tempus. Maecenas cursus justo velit, at convallis eros aliquet in. Vivamus vel eleifend ex. Fusce in enim tempus, ornare massa rutrum, tincidunt ipsum. Integer aliquam finibus tortor. Aliquam turpis magna, auctor vel euismod a, tincidunt eu dolor.

Mauris mollis mi nec ante congue pharetra. Phasellus id feugiat dui, nec facilisis mi. Donec id metus sit amet lorem lobortis vulputate ut non eros. Fusce aliquet euismod maximus. Praesent felis lectus, pharetra ut lacinia eu, tincidunt a libero. Aenean odio lacus, lacinia ut dapibus sit amet, volutpat vel est. Nulla dapibus nibh nisl, non efficitur nulla molestie vitae. Curabitur dictum leo pellentesque quam pharetra imperdiet. Quisque ligula dui, tempor non tincidunt ac, dapibus quis nisl. Suspendisse tristique augue vel lectus laoreet, vel aliquam mi finibus. Praesent eget tristique nulla.

Praesent egestas tempor eleifend. Integer vitae mi faucibus, mollis velit in, porta metus. Nulla bibendum sollicitudin elit id commodo. Duis semper nec risus non commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit, diam ut convallis rutrum, ipsum mi gravida neque, nec tempus diam lectus et est. Praesent ligula velit, sagittis ac aliquam et, luctus sed metus. Proin sagittis, magna id semper vestibulum, magna erat tincidunt dolor, eget fermentum nibh erat non erat. Curabitur et euismod ante, ut vehicula augue. Donec ut metus commodo lacus auctor pretium.

Donec nec nisl ligula. Maecenas hendrerit, mi nec auctor lacinia, nunc sem sagittis magna, eu blandit leo ante id dolor. Sed vulputate ex nibh, vitae blandit dolor porttitor eu. Morbi vel sapien imperdiet, tincidunt erat non, fermentum nunc. In enim justo, porta id fermentum non, accumsan vel risus. Etiam quis odio iaculis, euismod nulla consectetur, facilisis turpis. Aenean cursus dolor eu metus elementum auctor. Aenean ornare consectetur arcu, vel tincidunt est euismod quis. Pellentesque ullamcorper luctus augue nec sodales. Maecenas placerat dictum cursus. Sed a pretium massa. Aenean ornare, augue eu interdum bibendum, nisi tellus fringilla nisl, nec faucibus ex metus sed sapien. Nunc pharetra mollis orci, sit amet suscipit dui tristique ut. Nullam congue viverra gravida. Suspendisse iaculis tincidunt sapien at pulvinar.

Quisque lobortis turpis at mi porta scelerisque a non neque. Duis purus leo, accumsan ut porta vel, tempor sed nibh. Donec pretium egestas dolor, a pellentesque elit porta sit amet. In eget dolor nec augue consequat consectetur. In fermentum libero scelerisque pulvinar pretium. In quis dictum libero, vitae ultrices nibh. Morbi eleifend ipsum eu elit fringilla, non dignissim enim semper. Nulla facilisi. Aliquam volutpat blandit erat ac lobortis. Suspendisse eu ex sed erat aliquam ultrices tempor in lacus. Cras sit amet turpis ut justo ornare feugiat non accumsan purus. Integer condimentum sit amet nunc sed bibendum. Nullam accumsan ac nisi sit amet rhoncus.

---

你搞些中文试试？还有[链接](/)以及![wtm](http://img3.imgtn.bdimg.com/it/u=1793534070,4032315475&fm=11&gp=0.jpg)

![小狮子](https://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1592204266&t=bb6bee103f29a339d570dd1261d18bf7){.expand}

\`\`\`js
// Fetching all the article list
const articles = await this.$content('blog').fetch();

// Fetching articles with filters
const articles = await this.$content('blog')
  .search('title', 'welcome')
  .fetch();

// Fetching specific article [1]
const article = await this.$content('blog', articleSlug).fetch();

// Fetching specific article [2]
const article = await this.$content('blog')
  .where({ slug: articleSlug })
  .fetch();
\`\`\`

> 白嫖使人快乐——鲁迅
>> 嵌套又如何

1. 第一步
2. 摔一跤
3. 爬起来

- 香蕉
- 苹果
- 梨
`;