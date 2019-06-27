const path = require('path');

module.exports = {
  title: 'Storyscript',
  description: 'Build smarter applications.',
  ga: 'UA-111475156-5',
  theme: 'story',
  themeConfig: {
    algolia: {
      apiKey: 'daa25e161a8e69d7649ae46784fa45d5',
      indexName: 'asyncy'
    },
    sass: true,
    lastUpdated: 'Last Updated',
    repo: 'storyscript/docs.storyscript.io',
    repoLabel: 'Edit on GitHub',
    editLinks: true,
    sidebarDepth: 1,
    nav: [{
      name: 'Blog',
      link: '//storyscript.io/blog'
    }, {
      name: 'Docs',
      link: '//docs.storyscript.io',
      active: true
    }, {
      name: 'About',
      link: '//storyscript.io/about'
    }, {
      name: 'Hub',
      link: '//hub.storyscript.io'
    }, {
      name: 'Github',
      button: {
        url: '//github.com/storyscript',
        outlined: true,
        state: 'light',
        size: 'small',
        iconRight: 'github-face'
      }
    }],
    sidebar: [{
      title: 'Documentation',
      icon: 'home',
      path: '/'
    }, {
      title: 'Quick Start',
      icon: 'cloud',
      children: [
        '/quick-start/'
      ]
    }, {
      title: 'Storyscript Language',
      icon: 'lang',
      collapsable: true,
      children: [
        '/storyscript/intro/',
        '/storyscript/writing/',
        '/storyscript/syntax/',
        '/storyscript/execution/',
        '/storyscript/services/',
        '/storyscript/basic-types/',
        '/storyscript/functions/',
        '/storyscript/flow/',
        '/storyscript/advanced/',
        '/storyscript/secrets/'
      ]
    }, {
      icon: 'dev',
      title: 'Development',
      children: [
        // '/dev/learn/',
        '/dev/cli/',
        '/dev/architecture/',
        // '/dev/plugins/'
      ]
    }, {
      icon: 'refs',
      title: 'References',
      children: [
        '/reference/services/',
        '/reference/functions/',
        '/reference/exposing_services/'
      ]
    }, {
      icon: 'support',
      path: '/support/'
    }, {
      icon: 'faq',
      title: 'FAQ',
      children: [
        '/faq/general/',
        '/faq/language/',
        '/faq/cloud/'
      ]
    }]
  }
};