import Home from 'page/Home';
import Article from 'page/Article';
import PagePaths from 'data/enum/PagePaths';
import PageNames from 'data/enum/PageNames';

export default [
  {
    path: PagePaths.HOME,
    component: Home,
    name: PageNames.HOME,
  },
  {
    path: PagePaths.PODCAST,
    component: Article,
    name: PageNames.PODCAST,
    props: true,
  },
  {
    path: PagePaths.VIDEO,
    component: Article,
    name: PageNames.VIDEO,
    props: true,
  },
  {
    path: PagePaths.BLOG,
    component: Article,
    name: PageNames.BLOG,
    props: true,
  },
];
