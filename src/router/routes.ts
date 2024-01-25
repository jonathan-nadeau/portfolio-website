import { RouteRecordRaw } from 'vue-router';

const HomePage = () => import('pages/HomePage.vue');
const AboutPage = () => import('pages/AboutPage.vue');
const SkillsPage = () => import('pages/SkillsPage.vue');
const ProjectsPage = () => import('pages/ProjectsPage.vue');
const ContactPage = () => import('pages/ContactPage.vue');

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'IndexPage', component: HomePage },
      { path: '/about', name: 'AboutPage', component: AboutPage },
      { path: '/skills', name: 'SkillsPage', component: SkillsPage },
      { path: '/projects', name: 'ProjectsPage', component: ProjectsPage },
      { path: '/contact', name: 'ContactPage', component: ContactPage }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
];

export default routes;
